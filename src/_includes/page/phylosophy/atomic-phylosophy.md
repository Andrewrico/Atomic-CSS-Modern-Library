## Thinking in Atomic
"Atomic CSS" is a CSS architecture. It is not opinionated; it simply defines a set of classes representing single-purpose styling units.

Atomizer implements the Atomic syntax to help you generate Atomic CSS. It only creates a style sheet with declarations that are relevant to your project. These style declarations are generated from Atomic classes found within your project, or from custom values defined in the Atomizer config file.

Adopting Atomic CSS addresses common CSS challenges:

### *Changes are predictable*

Because of the single responsibility principle (one class == one style) it is easy to predict what removing or adding a class will do.
Scope is limited
There is no reliance on descendant/contextual selectors — styling is done inside "specificity layers".

### *CSS is clean*

There is very little redundancy and no dead weight (all styles are relevant to the project).
Components are portable
Classes used to style a component are not specific to that component, hence components can live in any other project that uses Atomizer [2].

### *Beginner-friendly*

Writing efficient and correct selectors is often one of the hardest parts of CSS for new developers to master. With Atomic CSS, developers don't create bloat because they don't write the selectors, instead they mostly re-use existing classes. This can greatly simplify the learning curve for inexperienced developers.