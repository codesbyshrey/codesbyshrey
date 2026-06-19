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

on ensureAlbum(albumName)
	tell application "/System/Applications/Photos.app"
		try
			return first album whose name is albumName
		on error
			return make new album named albumName
		end try
	end tell
end ensureAlbum

on collectAlbumIds(albumName)
	tell application "/System/Applications/Photos.app"
		set targetAlbum to first album whose name is albumName
		set ids to {}
		repeat with itemRef in media items of targetAlbum
			set ids to my addUnique(ids, id of itemRef)
		end repeat
		return ids
	end tell
end collectAlbumIds

on searchUnion(termList, albumName)
	tell application "/System/Applications/Photos.app"
		set targetAlbum to first album whose name is albumName
		set ids to {}
		set termOut to ""
		repeat with t in termList
			set foundItems to search for (t as text)
			set termOut to termOut & (albumName as text) & " <- " & (t as text) & ": " & ((count of foundItems) as text) & linefeed
			if (count of foundItems) > 0 then add foundItems to targetAlbum
			repeat with itemRef in foundItems
				set ids to my addUnique(ids, id of itemRef)
			end repeat
		end repeat
		return {ids, termOut}
	end tell
end searchUnion

my ensureAlbum("𝕏")
my ensureAlbum("LinkedIn")
my ensureAlbum("browser")

tell application "/System/Applications/Photos.app"
	set allItems to search for "Screenshots"
	set allCount to count of allItems
end tell

set beforeX to my collectAlbumIds("𝕏")
set beforeLinkedIn to my collectAlbumIds("LinkedIn")
set beforeBrowser to my collectAlbumIds("browser")

set xResult to my searchUnion({"Twitter Screenshots", "twitter.com Screenshots", "Threads Screenshots", "threads.net Screenshots", "Post your reply Screenshots", "Repost Screenshots", "Quote post Screenshots"}, "𝕏")
set xIds to item 1 of xResult
set xTermOut to item 2 of xResult

set liResult to my searchUnion({"LinkedIn Screenshots", "linkedin.com Screenshots", "Connect on LinkedIn Screenshots", "Facebook Screenshots", "facebook.com Screenshots", "Meta Screenshots"}, "LinkedIn")
set liIds to item 1 of liResult
set liTermOut to item 2 of liResult

set browserResult to my searchUnion({"YouTube Screenshots", "youtube.com Screenshots", "Subscribe Screenshots", "Shorts Screenshots", "Safari Screenshots", "Search or enter website name Screenshots", "Reader View Screenshots", "Mail Screenshots", "Email Screenshots", "Emails Screenshots", "Gmail Screenshots", "Outlook Screenshots", "Inbox Screenshots", "Subject Screenshots"}, "browser")
set browserIds to item 1 of browserResult
set browserTermOut to item 2 of browserResult

set out to "TERM_COUNTS" & linefeed & xTermOut & liTermOut & browserTermOut & "BATCH_ADDITIONS" & linefeed

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
			if my containsText(xIds, itemId) and not my containsText(beforeX, itemId) then set cX to cX + 1
			if my containsText(liIds, itemId) and not my containsText(beforeLinkedIn, itemId) then set cLinkedIn to cLinkedIn + 1
			if my containsText(browserIds, itemId) and not my containsText(beforeBrowser, itemId) then set cBrowser to cBrowser + 1
		end repeat
	end tell
	set out to out & "Batch " & b & " screenshots " & startIndex & "-" & endIndex & ": 𝕏 +" & cX & ", LinkedIn +" & cLinkedIn & ", browser +" & cBrowser & linefeed
end repeat

tell application "/System/Applications/Photos.app"
	set xCount to count of media items of first album whose name is "𝕏"
	set liCount to count of media items of first album whose name is "LinkedIn"
	set browserCount to count of media items of first album whose name is "browser"
end tell

return out & "FINAL_COUNTS" & linefeed & "𝕏: " & xCount & linefeed & "LinkedIn: " & liCount & linefeed & "browser: " & browserCount
