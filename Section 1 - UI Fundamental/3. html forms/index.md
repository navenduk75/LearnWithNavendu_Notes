# HTML Forms

The `<form>` HTML element represents a document section containing controls for submitting information.

## Form attributes

1. action:  
The URL of the target page that processes the form submission.

2. method:  
The HTTP method to submit the form with.
    * get (default): passes form data as query string in url.
    * post: passes form data in request body. Generally used when we send data to server.

## Form Example

```html
<form method="get">
    <div>
        <label for="name">Name:</label>
        <input name="nme" id="name">
    </div>
    <div>
        <label for="ps">Password:</label>
        <input type="password" name="pass" id="ps">
    </div>
    <button type="submit">Submit</button>
</form>
```
    Note: Always specify the type attribute for the button. The default type for Internet Explorer is "button", while in other browsers it is "submit".

## Common Form Elements:
    1. Label: <label></label>
    2. Text Input: <input type="text"/>
    3. Password Input: <input type="password"/>
    4. Email Input: <input type="email"/>
    5. Number Input: <input type="number" min="1" max="150"/>
    6. Drop Down: <select>
            <option value="Chinese">Chinese Food</option>
            <option value="Thai">Thai Food</option>
        </select>
    7. Radio Button: <input type="radio" />
    8. Checkbox: <input type="checkbox" />
    9. Textarea: <textarea></textarea>
    10. File Upload: <input type="file" />
    11. Reset button: <button type="reset">Clean Form</button>
    12. Submit button: <button type="submit">Submit Form</button>
    13. Regular button: <button type="button">Submit Form</button>


[Form Example Code](./codes/html%20forms/form.html)

