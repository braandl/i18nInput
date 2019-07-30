# i18nInput

[![Build Status](https://travis-ci.org/braandl/i18nInput.svg?branch=master)](https://travis-ci.org/braandl/i18nInput)

## Install

Download required dependencies using npm and create packed distribution files using gulp,
or download the entire project and sample files.

```bash
 $ npm install
 $ gulp [pkg]
```

## Requirements

i18nInputView is dependent on the following JavaScript libraries:

* jQuery

## Demo

See demo under https://braandl.github.io/i18nInput

## Usage

setup i18nInputView and define languages

```javascript
    import i18nInputView from 'i18nInput';
    i18nInput = new i18nInputView(['de_DE, en_EN, fr_FR']);
```

Use a div element to define as the container of the input field.

```html
 <div id="my_i18n"></div>
```

The create the control, use the i18nInputView function on the ID of the div.

```javascript
 $(document).ready(function () {
    i18nInput.i18nInputView("my_i18n");
 });
```

### Allowed HTML5 Attributes
```html
<!-- The number of rows (if more than one, the input will be a textarea instead of an input fiel -->   
 rows="[0-9]*"

<!-- The width of the element -->
 width="270px"
 
<!-- The placeholder of the element that is shown when no input was entered. -->
 placeholder="My Placeholder"

<!-- The placeholder can also be of type array and have a single on for each language. -->
 placeholder="['Mein Platzhalter', 'My Placeholder']"
 
<!-- Array of languages that are offered, the first one will be selected on start -->
 languages="['de_DE', 'en_EN']"
 
<!-- Classname or classnames of the expander area underneath the input field --> 
 expander-class="classname"
 
<!-- Classname or classnames to style the input field itself -->
 input-class="classname"

<!-- Classname or classnames to style the picker -->
 picker-class="classname"
  
<!-- Animate FadeIn and Out, default is True -->
 animate="false"
 
<!-- Prevent submit if not all fields are filled, default is true -->
 submitOnMissing="false"
```

### JavaScript Access
```javascript

 // Prints all filled in results. Missing fields are not returned.
 $('#my_i18n').i18n();
 <- Array
    /*[de_DE: "Deutsch", nl_NL: "Nederlands", 
    en_EN: "English", en_US: "Different English", 
    de_AT: "Anderes Deutsch"]*/


 // Prints all filled in results. Missing fields are not returned.
 $('#my_i18n').i18nObject();
 <- Object
    /*{de_DE: "Deutsch", nl_NL: "Nederlands", 
    en_EN: "English", en_US: "Different English", 
    de_AT: "Anderes Deutsch"}*/

 // Prints all languages that were not filled in.
 $('#my_i18n').missing();
 <- Array
    /* ["de_DE", "de_AT", "en_EN", "en_US", "nl_NL"]; */

 // Prints wheather all Fields were filled or not.
 $('#my_i18n').complete();
 <- Boolean;

 /* Fill the Input Fields with preset Values using scalar Values or Arrays.
   Throws an Exception if Language is not available in definition.
 */
 $('#my_i18n').seti18n("de_DE", "Deutsch");
 <- Boolean

 $('#my_i18n').seti18n(["de_DE", "en_US"], ["Deutsch", "English"]);
 <- Boolean
 
 // Returns an Array of all locales that can be used to set up the View.
 $('#my_i18n').allLocales();
 <- Array; 
 
 /* Adds an optional handler that is called when the form submit failed, because of an incomplete data set. */
 $('#my_i18n').registerFormIncompleteHandler(function() { /*...*/ });
 <- Boolean; 
 
 // Enabling / Disabling the input field.
 $('#my_i18n > input').prop('disabled', true);
 
 // Instead of using jQuery selector, plain JavaScript is okay as well:
 document.getElementById('my_id1').i18n();
```
### Form Handling

As shown in the example below, a i18nInputView can be wrapped in a 
```html
<form METHOD="post">
    <div id="my_i18n" languages="['de_DE','de_AT','en_EN']"></div>
</form>
```
form element.<br>
When the form is submitted, the values of the i18nInputView will be appended to the form data as an Array:
```
    my_i18n[de_DE]:Hallo
    my_i18n[en_EN]:Hello
    my_i18n[de_AT]:Grüezi
```
an will be transferred to the target as such.<br>
You can include as many i18nInputViews into a single form as you wish, <br>
short, you can use it just like a normal ```<input>``` element.

Not filled languages will be ignored in the form data.

## Credits

* Flag Icon CSS was used to view all the 
awesome SVG Flags. <br>
 (https://github.com/lipis/flag-icon-css)
 
* Written by Stephan Brandt <stephan.brandt@contagt.com>
