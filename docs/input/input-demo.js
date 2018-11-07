"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var max = 5;
var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var InputDemo = /** @class */ (function () {
    function InputDemo() {
        var _this = this;
        this.floatingLabel = 'auto';
        this.ctrlDisabled = false;
        this.textareaAutosizeEnabled = false;
        this.placeholderTestControl = new forms_1.FormControl('', forms_1.Validators.required);
        this.items = [
            { value: 10 },
            { value: 20 },
            { value: 30 },
            { value: 40 },
            { value: 50 },
        ];
        this.rows = 8;
        this.formControl = new forms_1.FormControl('hello', forms_1.Validators.required);
        this.emailFormControl = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(EMAIL_REGEX)]);
        this.delayedFormControl = new forms_1.FormControl('');
        this.model = 'hello';
        this.isAutofilled = false;
        this.customAutofillStyle = true;
        this.customErrorStateMatcher = {
            isErrorState: function (control) {
                if (control) {
                    var hasInteraction = control.dirty || control.touched;
                    var isInvalid = control.invalid;
                    return !!(hasInteraction && isInvalid);
                }
                return false;
            }
        };
        setTimeout(function () { return _this.delayedFormControl.setValue('hello'); }, 100);
    }
    InputDemo.prototype.addABunch = function (n) {
        for (var x = 0; x < n; x++) {
            this.items.push({ value: ++max });
        }
    };
    InputDemo.prototype.togglePlaceholderTestValue = function () {
        this.placeholderTestControl.setValue(this.placeholderTestControl.value === '' ? 'Value' : '');
    };
    InputDemo.prototype.togglePlaceholderTestTouched = function () {
        this.placeholderTestControl.touched ?
            this.placeholderTestControl.markAsUntouched() :
            this.placeholderTestControl.markAsTouched();
    };
    InputDemo = __decorate([
        core_1.Component({changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'input-demo',
            template: "<mat-card class=\"demo-card demo-basic\"> <mat-toolbar color=\"primary\">Basic</mat-toolbar> <mat-card-content> <form> <mat-form-field class=\"demo-full-width\"> <mat-label>Company (disabled)</mat-label> <input matNativeControl disabled value=\"Google\"> </mat-form-field> <table style=\"width: 100%\" cellspacing=\"0\"><tr> <td> <mat-form-field style=\"width: 100%\" floatLabel=\"never\"> <mat-label>First name</mat-label> <input matInput> </mat-form-field> </td> <td> <mat-form-field style=\"width: 100%\"> <mat-label>Long last name that will be truncated</mat-label> <input matInput> </mat-form-field> </td> </tr></table> <p> <mat-form-field class=\"demo-full-width\"> <mat-label>Address</mat-label> <textarea matInput>1600 Amphitheatre Pkway</textarea> </mat-form-field> <mat-form-field class=\"demo-full-width\"> <mat-label>Address 2</mat-label> <textarea matNativeControl></textarea> </mat-form-field> </p> <table style=\"width: 100%\" cellspacing=\"0\"><tr> <td> <mat-form-field class=\"demo-full-width\"> <mat-label>City</mat-label> <input matInput value=\"Mountain View\"> </mat-form-field> </td> <td> <mat-form-field class=\"demo-full-width\"> <mat-label>State</mat-label> <input matInput maxLength=\"2\" value=\"CA\"> </mat-form-field> </td> <td> <mat-form-field class=\"demo-full-width\"> <mat-label>Postal code</mat-label> <input matInput #postalCode maxLength=\"5\" value=\"94043\" pattern=\"[0-9]{5}\"> <mat-hint align=\"end\"> <mat-icon>mode_edit</mat-icon> <span aria-live=\"polite\">{{postalCode.value.length}} / 5</span> </mat-hint> </mat-form-field> </td> </tr></table> </form> </mat-card-content> </mat-card> <mat-card class=\"demo-card demo-basic\"> <mat-toolbar color=\"primary\">Error messages</mat-toolbar> <mat-card-content> <h4>Regular</h4> <p> <mat-form-field> <mat-label>Example</mat-label> <input matInput [(ngModel)]=\"errorMessageExample1\" required> <mat-error>This field is required</mat-error> </mat-form-field> <mat-form-field> <mat-label>Email</mat-label> <input matInput [formControl]=\"emailFormControl\"> <mat-error *ngIf=\"emailFormControl.hasError('required')\"> This field is required </mat-error> <mat-error *ngIf=\"emailFormControl.hasError('pattern')\"> Please enter a valid email address </mat-error> </mat-form-field> </p> <h4>With hint</h4> <mat-form-field> <mat-label>Example</mat-label> <input matInput [(ngModel)]=\"errorMessageExample2\" required> <mat-error>This field is required</mat-error> <mat-hint>Please type something here</mat-hint> </mat-form-field> <form novalidate> <h4>Inside a form</h4> <mat-form-field> <mat-label>Example</mat-label> <input matInput name=\"example\" [(ngModel)]=\"errorMessageExample3\" required> <mat-error>This field is required</mat-error> </mat-form-field> <button color=\"primary\" mat-raised-button>Submit</button> </form> <h4>With a custom error function</h4> <mat-form-field> <mat-label>Example</mat-label> <input matInput [(ngModel)]=\"errorMessageExample4\" [errorStateMatcher]=\"customErrorStateMatcher\" required> <mat-error>This field is required</mat-error> </mat-form-field> </mat-card-content> </mat-card> <mat-card class=\"demo-card demo-basic\"> <mat-toolbar color=\"primary\">Prefix + Suffix</mat-toolbar> <mat-card-content> <h4>Text</h4> <mat-form-field class=\"demo-text-align-end\"> <mat-label>Amount</mat-label> <input matInput> <span matPrefix>$&nbsp;</span> <span matSuffix>.00</span> </mat-form-field> <h4>Icons</h4> <mat-form-field> <mat-label>Amount</mat-label> <input matInput> <mat-icon matPrefix>attach_money</mat-icon> <mat-icon matSuffix>mode_edit</mat-icon> </mat-form-field> <h4>Icon buttons</h4> <mat-form-field> <mat-label>Amount</mat-label> <input matInput> <button mat-icon-button matPrefix><mat-icon>attach_money</mat-icon></button> <button mat-icon-button matSuffix><mat-icon>mode_edit</mat-icon></button> </mat-form-field> </mat-card-content> </mat-card> <mat-card class=\"demo-card demo-basic\"> <mat-toolbar color=\"primary\">Divider Colors</mat-toolbar> <mat-card-content> <h4>Input</h4> <mat-form-field color=\"primary\" > <mat-label>Default color</mat-label> <input matInput value=\"example\"> </mat-form-field> <mat-form-field color=\"accent\"> <mat-label>Accent color</mat-label> <input matInput value=\"example\"> </mat-form-field> <mat-form-field color=\"warn\"> <mat-label>Warn color</mat-label> <input matInput value=\"example\"> </mat-form-field> <h4>Textarea</h4> <mat-form-field color=\"primary\"> <mat-label>Default color</mat-label> <textarea matInput>example</textarea> </mat-form-field> <mat-form-field color=\"accent\"> <mat-label>Accent color</mat-label> <textarea matInput>example</textarea> </mat-form-field> <mat-form-field color=\"warn\"> <mat-label>Warn color</mat-label> <textarea matInput>example</textarea> </mat-form-field> <h4>With error</h4> <mat-form-field color=\"primary\" > <mat-label>Default color</mat-label> <input matInput [(ngModel)]=\"dividerColorExample1\" required> <mat-error>This field is required</mat-error> </mat-form-field> <mat-form-field color=\"accent\"> <mat-label>Accent color</mat-label> <input matInput [(ngModel)]=\"dividerColorExample2\" required> <mat-error>This field is required</mat-error> </mat-form-field> <mat-form-field color=\"warn\"> <mat-label>Warn color</mat-label> <input matInput [(ngModel)]=\"dividerColorExample3\" required> <mat-error>This field is required</mat-error> </mat-form-field> </mat-card-content> </mat-card> <mat-card class=\"demo-card demo-basic\"> <mat-toolbar color=\"primary\">Hints</mat-toolbar> <mat-card-content> <h4>Input</h4> <p> <mat-form-field class=\"demo-full-width\"> <mat-label>Character count (100 max)</mat-label> <input matInput #characterCountInputHintExample maxLength=\"100\" value=\"Hello world. How are you?\"> <mat-hint align=\"end\" aria-live=\"polite\"> {{characterCountInputHintExample.value.length}} / 100 </mat-hint> </mat-form-field> </p> <h4>Textarea</h4> <p> <mat-form-field class=\"demo-full-width\"> <mat-label>Character count (100 max)</mat-label> <textarea matInput #characterCountTextareaHintExample maxLength=\"100\">Hello world. How are you?</textarea> <mat-hint align=\"end\" aria-live=\"polite\"> {{characterCountTextareaHintExample.value.length}} / 100 </mat-hint> </mat-form-field> </p> </mat-card-content> </mat-card> <mat-card class=\"demo-card demo-basic\"> <mat-toolbar color=\"primary\"> <span> Hello&nbsp; <mat-form-field color=\"accent\"> <mat-label>First name</mat-label> <input matInput [(ngModel)]=\"name\" type=\"text\"> </mat-form-field>, how are you? </span> </mat-toolbar> <mat-card-content> <p> <mat-form-field> <mat-label>Disabled field</mat-label> <input matInput disabled value=\"Value\"> </mat-form-field> <mat-form-field> <mat-label>Required field</mat-label> <input matInput required> </mat-form-field> </p> <p> <mat-form-field style=\"width: 100%\"> <mat-label>100% width label</mat-label> <input matInput> </mat-form-field> </p> <p> <mat-form-field style=\"width: 100%\"> <mat-label>Character count (100 max)</mat-label> <input matInput #input maxLength=\"100\"> <mat-hint align=\"end\" aria-live=\"polite\">{{input.value.length}} / 100</mat-hint> </mat-form-field> </p> <p> <mat-form-field hintLabel=\"Hint label\" style=\"width: 100%\"> <mat-label>Show hint label</mat-label> <input matInput> </mat-form-field> </p> <p> <mat-form-field> <input matInput> <mat-label> I <mat-icon>favorite</mat-icon> <b>bold</b> label </mat-label> <mat-hint> I also <mat-icon>home</mat-icon> <i>italic</i> hint labels </mat-hint> </mat-form-field> </p> <p> <mat-form-field hintLabel=\"Hint label\" style=\"width: 100%\"> <mat-label>Show hint label with character count</mat-label> <input matInput #hintLabelWithCharCount> <mat-hint align=\"end\" aria-live=\"polite\">{{hintLabelWithCharCount.value.length}}</mat-hint> </mat-form-field> </p> <p> <mat-form-field style=\"margin-bottom: 4em\"> <mat-label>Enter text to count</mat-label> <textarea matInput #longHint></textarea> <mat-hint> Enter some text to count how many characters are in it. The character count is shown on the right. </mat-hint> <mat-hint align=\"end\" style=\"white-space: nowrap\" aria-live=\"polite\"> Length: {{longHint.value.length}} </mat-hint> </mat-form-field> </p> <p> <mat-checkbox [(ngModel)]=\"color\">Check to change the color:</mat-checkbox> <mat-form-field [color]=\"color ? 'primary' : 'accent'\"> <input matInput [placeholder]=\"color ? 'Primary color' : 'Accent color'\"> </mat-form-field> </p> <p> <mat-checkbox [(ngModel)]=\"requiredField\"> Check to make required:</mat-checkbox> <mat-form-field> <input matInput [required]=\"requiredField\" [placeholder]=\"requiredField ? 'Required field' : 'Not required field'\"> </mat-form-field> </p> <p> <mat-checkbox [(ngModel)]=\"hideRequiredMarker\">Check to hide the required marker:</mat-checkbox> <mat-form-field [hideRequiredMarker]=\"hideRequiredMarker\" style=\"width: 300px\"> <input matInput required [placeholder]=\"hideRequiredMarker ? 'Required Without Marker' : 'Required With Marker'\"> </mat-form-field> </p> <p> <mat-button-toggle-group [(ngModel)]=\"floatingLabel\"> <mat-button-toggle value=\"auto\">Auto Float</mat-button-toggle> <mat-button-toggle value=\"always\">Always Float</mat-button-toggle> <mat-button-toggle value=\"never\">Never Float</mat-button-toggle> </mat-button-toggle-group> </p> <p> <mat-form-field [floatLabel]=\"floatingLabel\"> <mat-label>Label</mat-label> <input matInput> </mat-form-field> </p> <p> <mat-form-field [floatLabel]=\"floatingLabel\"> <mat-label>What is your favorite color?</mat-label> <input matInput type=\"color\" value=\"#00ff00\"> </mat-form-field> </p> <p> <mat-form-field> <mat-label>Prefixed</mat-label> <input matInput value=\"example\"> <div matPrefix>Example:&nbsp;</div> </mat-form-field> <mat-form-field class=\"demo-text-align-end\"> <mat-label>Suffixed</mat-label> <input matInput value=\"123\"> <span matSuffix>.00 €</span> </mat-form-field> <br/> Both: <mat-form-field class=\"demo-text-align-end\"> <mat-label>Email address</mat-label> <input matInput #email value=\"angular-core\"> <span matPrefix><mat-icon [class.primary]=\"email.focused\">email</mat-icon>&nbsp;</span> <span matSuffix [class.primary]=\"email.focused\">&nbsp;@gmail.com</span> </mat-form-field> </p> <p> Empty: <mat-form-field><input matInput></mat-form-field> <label>Label: <mat-form-field><input matInput></mat-form-field></label> </p> </mat-card-content> </mat-card> <mat-card class=\"demo-card demo-basic\"> <mat-toolbar color=\"primary\">Number Inputs</mat-toolbar> <mat-card-content> <table width=\"100%\"> <thead> <td>Table</td> <td colspan=\"3\"> <button (click)=\"addABunch(5)\">Add 5</button> <button (click)=\"addABunch(10)\">Add 10</button> <button (click)=\"addABunch(100)\">Add 100</button> <button (click)=\"addABunch(1000)\">Add 1000</button> </td> </thead> <tr *ngFor=\"let item of items; let i = index\"> <td>{{i+1}}</td> <td> <mat-form-field> <mat-label>Value</mat-label> <input matInput type=\"number\" [(ngModel)]=\"items[i].value\"> </mat-form-field> </td> <td> <input type=\"number\" [(ngModel)]=\"items[i].value\"> </td> <td>{{item.value}}</td> </tr> </table> </mat-card-content> </mat-card> <mat-card class=\"demo-card demo-basic\"> <mat-toolbar color=\"primary\">Forms</mat-toolbar> <mat-card-content> <mat-form-field> <mat-label>Reactive</mat-label> <input matInput [formControl]=\"formControl\"> </mat-form-field> <mat-form-field> <mat-label>Template</mat-label> <input matInput [(ngModel)]=\"model\" required [disabled]=\"ctrlDisabled\"> </mat-form-field> <button mat-raised-button color=\"primary\" (click)=\"formControl.enabled ? formControl.disable() : formControl.enable()\"> DISABLE REACTIVE CTRL </button> <button mat-raised-button color=\"primary\" (click)=\"ctrlDisabled = !ctrlDisabled\"> DISABLE TD CTRL </button> <div> <mat-form-field> <mat-label>Delayed value</mat-label> <input matInput [formControl]=\"delayedFormControl\"> </mat-form-field> </div> </mat-card-content> </mat-card> <mat-card class=\"demo-card demo-basic\"> <mat-toolbar color=\"primary\">Floating labels</mat-toolbar> <mat-card-content> <div> <mat-form-field> <input matInput [formControl]=\"placeholderTestControl\"> </mat-form-field> <mat-form-field> <input matInput [formControl]=\"placeholderTestControl\" placeholder=\"Only placeholder\"> </mat-form-field> <mat-form-field> <mat-label>Only label</mat-label> <input matInput [formControl]=\"placeholderTestControl\"> </mat-form-field> <mat-form-field> <mat-label>Label and placeholder</mat-label> <input matInput [formControl]=\"placeholderTestControl\" placeholder=\"This is the placeholder\"> </mat-form-field> <mat-form-field floatLabel=\"always\"> <mat-label>Always float</mat-label> <input matInput [formControl]=\"placeholderTestControl\" placeholder=\"This is the placeholder\"> </mat-form-field> <mat-form-field floatLabel=\"never\"> <mat-label>Never float</mat-label> <input matInput [formControl]=\"placeholderTestControl\" placeholder=\"This is the placeholder\"> </mat-form-field> <mat-form-field> <mat-label>Label and placeholder element</mat-label> <mat-placeholder>The placeholder element</mat-placeholder> <input matInput [formControl]=\"placeholderTestControl\"> </mat-form-field> </div> <div> <mat-form-field> <mat-select [formControl]=\"placeholderTestControl\"> <mat-option value=\"Value\">Value</mat-option> </mat-select> </mat-form-field> <mat-form-field> <mat-select [formControl]=\"placeholderTestControl\" placeholder=\"Only placeholder\"> <mat-option value=\"Value\">Value</mat-option> </mat-select> </mat-form-field> <mat-form-field> <mat-label>Only label</mat-label> <mat-select [formControl]=\"placeholderTestControl\"> <mat-option value=\"Value\">Value</mat-option> </mat-select> </mat-form-field> <mat-form-field> <mat-label>Label and placeholder</mat-label> <mat-select [formControl]=\"placeholderTestControl\" placeholder=\"This is the placeholder\"> <mat-option value=\"Value\">Value</mat-option> </mat-select> </mat-form-field> <mat-form-field floatLabel=\"always\"> <mat-label>Always float</mat-label> <mat-select [formControl]=\"placeholderTestControl\" placeholder=\"This is the placeholder\"> <mat-option value=\"Value\">Value</mat-option> </mat-select> </mat-form-field> <mat-form-field floatLabel=\"never\"> <mat-label>Never float</mat-label> <mat-select [formControl]=\"placeholderTestControl\" placeholder=\"This is the placeholder\"> <mat-option value=\"Value\">Value</mat-option> </mat-select> </mat-form-field> <mat-form-field> <mat-label>Label and placeholder element</mat-label> <mat-placeholder>The placeholder element</mat-placeholder> <mat-select [formControl]=\"placeholderTestControl\"> <mat-option value=\"Value\">Value</mat-option> </mat-select> </mat-form-field> </div> <button mat-raised-button color=\"primary\" (click)=\"togglePlaceholderTestValue()\">Toggle value</button> <button mat-raised-button color=\"primary\" (click)=\"togglePlaceholderTestTouched()\">Toggle touched</button> </mat-card-content> </mat-card> <mat-card class=\"demo-card demo-basic\"> <mat-toolbar color=\"primary\">Textarea Autosize</mat-toolbar> <mat-card-content> <h3>Regular &lt;textarea&gt;</h3> <textarea class=\"demo-textarea\" cdkTextareaAutosize cdkAutosizeMaxRows=\"10\"></textarea> <h3>Regular &lt;textarea&gt; with maxRows and minRows</h3> <div> <label>minRows<input type=\"number\" #minRows class=\"demo-rows\" (input)=\"1+1\"></label> &nbsp; <label>maxRows<input type=\"number\" #maxRows class=\"demo-rows\" (input)=\"1+1\"></label> </div> <textarea class=\"demo-textarea\" cdkTextareaAutosize [cdkAutosizeMinRows]=\"minRows.value\" [cdkAutosizeMaxRows]=\"maxRows.value\"></textarea> <button type=\"button\" (click)=\"minRows.value = minRows.value - 1\">Decrement minRows</button> <h3>&lt;textarea&gt; with mat-form-field</h3> <div> <mat-form-field> <mat-label>Autosized textarea</mat-label> <textarea matInput cdkTextareaAutosize cdkAutosizeMaxRows=\"10\"></textarea> </mat-form-field> </div> <h3>&lt;textarea&gt; with ngModel</h3> <div> <label>Input with same ngModel <input [(ngModel)]=\"textareaNgModelValue\"></label> </div> <label> Plain textarea with auto size <textarea cdkTextareaAutosize [(ngModel)]=\"textareaNgModelValue\"></textarea> </label> <h3>&lt;textarea&gt; with bindable autosize </h3> <mat-checkbox [(ngModel)]=\"textareaAutosizeEnabled\" name=\"autosizeEnabledCheckbox\"> Autosize enabled </mat-checkbox> <textarea [cdkTextareaAutosize]=\"textareaAutosizeEnabled\"></textarea> </mat-card-content> </mat-card> <mat-card class=\"demo-card demo-basic\"> <mat-toolbar color=\"primary\">Appearance</mat-toolbar> <mat-card-content> <mat-form-field appearance=\"legacy\"> <mat-label>Legacy appearance</mat-label> <input matInput [(ngModel)]=\"legacyAppearance\" required> <mat-error>This field is required</mat-error> <mat-hint>Please type something here</mat-hint> </mat-form-field> <mat-form-field appearance=\"standard\"> <mat-label>Standard appearance</mat-label> <input matInput [(ngModel)]=\"standardAppearance\" required> <mat-error>This field is required</mat-error> <mat-hint>Please type something here</mat-hint> </mat-form-field> <mat-form-field appearance=\"fill\"> <mat-label>Fill appearance</mat-label> <input matInput [(ngModel)]=\"fillAppearance\" required> <mat-error>This field is required</mat-error> <mat-hint>Please type something here</mat-hint> </mat-form-field> <mat-form-field appearance=\"outline\"> <mat-label>Outline appearance</mat-label> <input matInput [(ngModel)]=\"outlineAppearance\" required> <mat-error>This field is required</mat-error> <mat-hint>Please type something here</mat-hint> </mat-form-field> <table style=\"width: 100%\" cellspacing=\"0\"><tr> <td> <mat-form-field appearance=\"legacy\" style=\"width: 100%\"> <mat-label>Legacy appearance</mat-label> <input matInput [(ngModel)]=\"legacyAppearance\" required> <mat-error>This field is required</mat-error> <mat-hint>Please type something here</mat-hint> </mat-form-field> </td> <td> <mat-form-field appearance=\"standard\" style=\"width: 100%\"> <mat-label>Standard appearance</mat-label> <input matInput [(ngModel)]=\"standardAppearance\" required> <mat-error>This field is required</mat-error> <mat-hint>Please type something here</mat-hint> </mat-form-field> </td> <td> <mat-form-field appearance=\"fill\" style=\"width: 100%\"> <mat-label>Fill appearance</mat-label> <input matInput [(ngModel)]=\"fillAppearance\" required> <mat-error>This field is required</mat-error> <mat-hint>Please type something here</mat-hint> </mat-form-field> </td> <td> <mat-form-field appearance=\"outline\" style=\"width: 100%\"> <mat-label>Outline appearance</mat-label> <input matInput [(ngModel)]=\"outlineAppearance\" required> <mat-error>This field is required</mat-error> <mat-hint>Please type something here</mat-hint> </mat-form-field> </td> </tr></table> </mat-card-content> </mat-card> <mat-card class=\"demo-card demo-basic\"> <mat-toolbar color=\"primary\">Autofill</mat-toolbar> <mat-card-content> <form novalidate> <mat-checkbox [(ngModel)]=\"customAutofillStyle\" name=\"custom\"> Use custom autofill style </mat-checkbox> <mat-form-field> <mat-label>Autofill monitored</mat-label> <input matInput (cdkAutofill)=\"isAutofilled = $event.isAutofilled\" name=\"autofill\" [class.demo-custom-autofill-style]=\"customAutofillStyle\"> </mat-form-field> <button color=\"primary\" mat-raised-button>Submit</button> <span> is autofilled? {{isAutofilled ? 'yes' : 'no'}}</span> </form> </mat-card-content> </mat-card> <mat-card class=\"demo-card demo-basic\"> <mat-toolbar color=\"primary\">Outline form field in a tab</mat-toolbar> <mat-card-content> <mat-tab-group> <mat-tab label=\"Tab 1\"> <mat-form-field appearance=\"outline\"> <mat-label>Tab 1 input</mat-label> <input matInput value=\"test\"> </mat-form-field> </mat-tab> <mat-tab label=\"Tab 2\"> <mat-form-field appearance=\"outline\"> <mat-label>Tab 2 input</mat-label> <input matInput value=\"test\"> </mat-form-field> </mat-tab> </mat-tab-group> </mat-card-content> </mat-card> ",
            styles: [".demo-basic { padding: 0; } .demo-basic .mat-card-content { padding: 16px; } .demo-full-width { width: 100%; } .demo-card { margin: 16px; } .demo-card mat-card-content { font-size: 16px; } .demo-text-align-end { text-align: end; } .demo-textarea { resize: none; border: none; overflow: auto; padding: 0; background: lightblue; } @keyframes cdk-text-field-autofill-color-0 { to { background: transparent; color: red; } } .demo-custom-autofill-style:-webkit-autofill { animation-name: cdk-text-field-autofill-color-0; animation-fill-mode: both; } .demo-custom-autofill-style.cdk-text-field-autofill-monitored:-webkit-autofill { animation-name: cdk-text-field-autofill-start, cdk-text-field-autofill-color-0; } .demo-rows { width: 30px; } "],
        }),
        __metadata("design:paramtypes", [])
    ], InputDemo);
    return InputDemo;
}());
exports.InputDemo = InputDemo;
//# sourceMappingURL=input-demo.js.map