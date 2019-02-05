# react-form-components
A library of components for building forms in React


[![CircleCI](https://circleci.com/gh/ryanbagwell/react-form-components/tree/master.svg?style=svg)](https://circleci.com/gh/ryanbagwell/react-form-components/tree/master)


## Usage

```

import {FieldGroup, SelectBox, CheckBox, Input, TextArea} from '@rmb185/react-form-components';

or

const {FieldGroup, SelectBox, CheckBox, Input, TextArea} = require('@rmb185/react-form-components');

<FieldGroup
  key="input name"
  label="First Name"
  className="first-name-wrap">

  <Input
    className="first-name"
    name="first_name"
    type="text"
    required />

</FieldGroup>

Will render:

<div class="first-name-wrap">
    <label class="first-name-wrap__label">First name*</label>
    <input class="first-name text" type="text" name="first_name" required>
</div>

```


