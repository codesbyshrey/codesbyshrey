# Testing Reference

Testing is how you prove code still behaves the way you expect after changes. Good tests cover expected behavior, edge cases, and failure paths without making the test suite harder to maintain than the feature itself.

## Testing Levels

### Unit Tests

Unit tests check one small piece of logic in isolation, usually a single function, component, model method, validator, or helper.

Use unit tests when:

- The behavior has clear inputs and outputs.
- The logic is easy to isolate.
- You want fast feedback while developing.

### Integration Tests

Integration tests check that multiple pieces work together. They are useful for workflows that cross files, modules, APIs, databases, or user interactions.

Think of integration tests like a factory line check: each unit may work on its own, but the assembled system still needs to be tested as a whole.

Use integration tests when:

- A bug could appear where two systems meet.
- A user flow depends on multiple pieces of code.
- You want to catch regressions from refactors or dependency changes.

### End-to-End Tests

End-to-end tests simulate a real user moving through the app. They are the most realistic, but usually slower and more brittle than unit or integration tests.

Use end-to-end tests for:

- Critical user journeys.
- Checkout, signup, login, upload, or payment flows.
- High-risk workflows where confidence matters more than speed.

## What To Test

Prioritize anything that can break user trust or developer confidence:

- Business rules and calculations.
- Forms, validators, and input handling.
- API requests and responses.
- Error states and empty states.
- Authentication and permissions.
- Database models and data transformations.
- Components with conditional rendering.

## Test Case Shape

A useful test usually follows this pattern:

1. Arrange: create the data, state, or inputs.
2. Act: run the function or user action.
3. Assert: check the result.

```txt
Given this starting condition,
when this action happens,
then this result should be true.
```

## Best Practices

1. Test behavior, not implementation details.
2. Keep each test focused on one reason to fail.
3. Name tests after the behavior they prove.
4. Start with the riskiest code, not the easiest code.
5. Prefer many fast tests and a few high-value integration tests.
6. Run tests before pushing and before production deploys.
7. When fixing a bug, write a test that would have caught it.

## Common Workflow

1. Make the smallest useful change.
2. Run the relevant tests locally.
3. Fix failures or update tests if behavior intentionally changed.
4. Run the broader suite before merging.
5. Test again in staging when the change affects user-facing behavior.

## Django Notes

Django tests can start in a single `tests.py` file. As the project grows, split tests into a `tests/` folder that mirrors the app structure.

Common test targets:

- Models.
- Forms.
- Views.
- Serializers.
- Permissions.
- Validators.

```py
from django.test import TestCase


class ExampleTestCase(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.is_active = True

    def setUp(self):
        self.label = "example"

    def test_is_active_defaults_to_true(self):
        self.assertTrue(self.is_active)

    def test_one_plus_one_equals_two(self):
        self.assertEqual(1 + 1, 2)
```

## React Native Notes

Common test targets:

- Component rendering.
- User interactions.
- Navigation behavior.
- API loading states.
- Error and empty states.

Useful questions:

- What should the user see first?
- What changes after a tap, swipe, or text input?
- What happens while data is loading?
- What happens if the request fails?

## Quick Pre-Merge Checklist

- New or changed behavior has test coverage.
- Critical flows still pass.
- Failure states are handled.
- Tests are readable enough to explain the expected behavior.
- The suite runs cleanly before the code is merged.