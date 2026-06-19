on containsText(theList, theText)
	repeat with x in theList
		if (x as text) is theText then return true
	end repeat
	return false
end containsText

on addUnique(theList, theText)
	if my containsText(theList, theText) is false then set end of theList to theText
	return theList
end addUnique

on searchIds(termList)
	tell application "/System/Applications/Photos.app"
		set ids to {}
		set termOut to ""
		repeat with t in termList
			set foundItems to search for (t as text)
			set termOut to termOut & (t as text) & ": " & ((count of foundItems) as text) & linefeed
			repeat with itemRef in foundItems
				set ids to my addUnique(ids, id of itemRef)
			end repeat
		end repeat
		return {ids, termOut}
	end tell
end searchIds

tell application "/System/Applications/Photos.app"
	set allItems to search for "Screenshots"
	set allCount to count of allItems
end tell

set xResult to my searchIds({"Twitter Screenshots", "twitter.com Screenshots", "Threads Screenshots", "threads.net Screenshots", "Post your reply Screenshots", "Repost Screenshots", "Quote post Screenshots"})
set xIds to item 1 of xResult
set xTermOut to item 2 of xResult

set liResult to my searchIds({"LinkedIn Screenshots", "linkedin.com Screenshots", "Connect on LinkedIn Screenshots", "Facebook Screenshots", "facebook.com Screenshots", "Meta Screenshots"})
set liIds to item 1 of liResult
set liTermOut to item 2 of liResult

set browserResult to my searchIds({"YouTube Screenshots", "youtube.com Screenshots", "Subscribe Screenshots", "Shorts Screenshots", "Safari Screenshots", "Search or enter website name Screenshots", "Reader View Screenshots", "Mail Screenshots", "Email Screenshots", "Emails Screenshots", "Gmail Screenshots", "Outlook Screenshots", "Inbox Screenshots", "Subject Screenshots"})
set browserIds to item 1 of browserResult
set browserTermOut to item 2 of browserResult

set out to "TERM_COUNTS" & linefeed & "X terms:" & linefeed & xTermOut & "LinkedIn terms:" & linefeed & liTermOut & "browser terms:" & linefeed & browserTermOut & "BATCH_MATCHES" & linefeed

repeat with b from 1 to 11
	set startIndex to ((b - 1) * 160) + 1
	if startIndex > allCount then exit repeat
	set endIndex to b * 160
	if endIndex > allCount then set endIndex to allCount
	set cX to 0
	set cLinkedIn to 0
	set cBrowser to 0
	tell application "/System/Applications/Photos.app"
		repeat with i from startIndex to endIndex
			set itemId to id of item i of allItems
			if my containsText(xIds, itemId) then set cX to cX + 1
			if my containsText(liIds, itemId) then set cLinkedIn to cLinkedIn + 1
			if my containsText(browserIds, itemId) then set cBrowser to cBrowser + 1
		end repeat
	end tell
	set out to out & "Batch " & b & " screenshots " & startIndex & "-" & endIndex & ": 𝕏 matches " & cX & ", LinkedIn matches " & cLinkedIn & ", browser matches " & cBrowser & linefeed
end repeat

tell application "/System/Applications/Photos.app"
	set xAlbum to first album whose name is "𝕏"
	set liAlbum to first album whose name is "LinkedIn"
	set browserAlbum to first album whose name is "browser"
	set xCount to count of media items of xAlbum
	set liCount to count of media items of liAlbum
	set browserCount to count of media items of browserAlbum
end tell

return out & "FINAL_COUNTS" & linefeed & "𝕏: " & xCount & linefeed & "LinkedIn: " & liCount & linefeed & "browser: " & browserCount
