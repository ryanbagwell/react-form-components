
### Choices

To populate ```<option>``` tags whose values are the same as their display values,
use an array of strings.


```html
<SelectBox
  choices={['Choice 1', 'Choice 2']} />
```

When display values should be different than the value property,
use an array of objects with ```displayName``` and ```value``` properties.


```html
<SelectBox
  choices={[
    {
        displayName: 'Choice 1',
        value: 'choice1',
    },
    {
        displayName: 'Choice 2'
        value: 'choice2',
    }
  ]} />
```