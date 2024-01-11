## const vs readonly

**const:**

1. **Value:** A `const` field's value is constant at `compile-time`, and it cannot be changed once it is assigned.

2. **Initialization:** A `const` field must be initialized at the time of declaration. It cannot be assigned a value at runtime or in a constructor.

3. **Scope:** `const` fields are implicitly `static`. This means they belong to the type rather than an instance of the type. You access them using the type name, not an instance of the class.

4. **Use Cases:** `const` is typically used for values that are known and constant at compile-time, such as mathematical constants (e.g., pi), configuration values, or other values that should never change during the program's execution.

5. **Example:**

   ```csharp
   public class MyClass
   {
       public const int MyConstantValue = 42;
   }
   ```

**readonly:**

1. **Value:** A `readonly` field's value can only be assigned at runtime, typically within the constructor of the class. Once assigned, it cannot be changed.

2. **Initialization:** Unlike `const`, a `readonly` field doesn't require initialization at the time of declaration. Instead, it can be initialized in the constructor of the class where it's defined.

3. **Scope:** `readonly` fields are instance-specific. Each instance of the class can have a different value for a `readonly` field, but once set, it cannot be changed.

4. **Use Cases:** `readonly` is used for values that are constant for each instance of a class but may vary between instances. For example, a class might have a `readonly` field representing a creation timestamp that's set when an object is constructed.

5. **Example:**

   ```csharp
   public class MyClass
   {
       public readonly int MyReadOnlyValue;

       public MyClass(int value)
       {
           MyReadOnlyValue = value; // Initialized in the constructor
       }
   }
   ```

In summary, `const` is used for compile-time constant values that are the same for all instances of a class, while `readonly` is used for runtime constant values that can vary between instances of a class. Understanding when to use each depends on your specific requirements for constant values within your code.

## Common examples:

### const:
```csharp
public class MathConstants
{
    public const double Pi = 3.14159;
    public const int DaysInWeek = 7;
}
```

```csharp
public class AppConfig
{
    public const string ApiUrl = "https://api.example.com";
    public const int MaxRetryAttempts = 3;
}
```
### readonly
```csharp
public class Example
{
    public readonly DateTime CreationTime;

    public Example()
    {
        CreationTime = DateTime.Now;
    }
}
```

```csharp
//Lazy Initialization
public class LazyInitializationExample
{
    private readonly List<string> initializedList;

    public LazyInitializationExample()
    {
        initializedList = InitializeList();
    }

    private List<string> InitializeList()
    {
        // Perform some complex initialization logic
        return new List<string> { "Item1", "Item2", "Item3" };
    }

    public List<string> GetInitializedList()
    {
        return initializedList;
    }
}
```
