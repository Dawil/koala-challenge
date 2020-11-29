## Puzzle Game

Following the Puzzle #1 example, write the execution flow based on the puzzle given.

#### Puzzle #1

```js
doSomething()
  .then(function() {
    return doSomethingElse();
  })
  .then(finalHandler);
```

Answer:

```
doSomething
|-----------------|
                  doSomethingElse(undefined)
                  |------------------|
                                     finalHandler(resultOfDoSomethingElse)
                                     |------------------|
```

#### Puzzle #2

```js
doSomething()
  .then(function() {
    doSomethingElse();
  })
  .then(finalHandler);
```

Answer:

```js
doSomething
|-----------------|
                  doSomethingElse(undefined)
                  |------------------|
                                     finalHandler(undefined)
                                     |------------------|
```

#### Puzzle #3

```js
doSomething()
  .then(doSomethingElse())
  .then(finalHandler);
```

Answer:

I'm unsure how best to represent this in a diagram so instead I'll use text.

1. `doSomething()` is called and immediately returns a Promise
2. `doSomethingElse()` is then called (before the Promise completes) and immediately returns a function
3. That function is passed to `.then()` and is executed, returning a Promise
4. Upon completion of the Promise the result is passed to `finalHandler` which then executes
5. The entire expression evaluates to a Promise that completes with the return value of `finalHandler`

#### Puzzle #4

```js
doSomething()
  .then(doSomethingElse)
  .then(finalHandler);
```

Answer:

1. `doSomething()` is called and immediately returns a Promise
2. Once `doSomething()` completes the return value is passed to `doSomethingElse` which is then executed
3. Once `doSomethingElse` completes the return value is passed to `finalHandler` which is then executed
4. As above, the entire expression evaluates to a Promise that completes with the return value of `finalHandler`

## Quick challenges

### Shell/CLI
1. What is happening in these Linux commands?  Describe as much as you know about what each symbol means and the effect it will have in the execution of the command, and the named programs.

   a) `(for i in {1..100}; do echo $i; done;) | grep 3 | grep -v 1 | paste -s -d+ - | bc`
     * `(for ... done;)` runs in a subshell. It prints 1..100 to std out (delimited by newlines) in a loop and then terminates
     * `grep 3` returns only the lines containing a 3, e.g. 3, 13, 23, 30...
     * `grep -v 1` is _inverse_ grep, it filters out lines containing 1 from the above expression, e.g. 13, 31 are dropped and we still have 3, 23, 30, 32...
     * `paste -s -d+` replaces the newline delimination with "+" delimination, e.g. 3+23+30+...
     * `bc` is a calculator, it evaluates the math expresion that has been produced. We have summed the numbers between 1 and 100 containing the digit 3 and not 1 (= 748) 
   
   b) `[ ! -f /var/lock/myscript.lock ] && touch /var/lock/myscript.lock && (yum -y update >> /var/log/mylog.log 2>&1; ) && rm -f /var/lock/myscript.lock`
     * `[ ! ... ]` is a test (see `man test`). The `-f foo` returns true if file `foo` exists and `!` negates the expression
     * `&&` the following expression will only evaluate if the exit code of the previous expression is true (0), i.e. `/var/lock/myscript.lock` does not exist
     * `touch ...` will create a lock file at the specified location
     * `&&` as above
     * `(yum -y update ...` will perform a system update using the Red had package manager yum (`-y` means "yes" and will not require user confirmation to proceed)
     * `>> ...` means std out from the previous expression will be appended to a specified log file
     * `2>&1` will redirect std err  to stdout (which would otherwise appear empty due to the previous appending redirection
     * `&& rm -f ...` if the previous `yum update` succeeds the lock file will be removed (`-f` means forcefully, i.e. it will not require user confirmation, as with yum's `-y`)
     * To summarize, we have wrapped a yum update in a lock file to prevent yum being used concurrently by multiple processes. Because the error case is not handled (with a `|| ...` command) in the event of an error manual cleanup will be required.


2. There is a directory, containing a large tree of subdirectories and files.  Scattered throughout these files are Australian phone numbers, and we want to harvest them – we want to end up with a simple list of the phone numbers.

   a) Write a regular expression to match Australian phone numbers.  The numbers will be in a mixture of the forms 02xxxxxxxx and +612xxxxxxxx, and there will also be the common usage of hyphens, spaces, and parentheses, so all of those common possibilities must be supported. eg. 02 xxxx xxxx, (02) xxxx-xxxx, +61 2 xxxx xxxx, +61 02 xxxxxxxx, +61 (0)2 xxxx-xxxx
     
     The following regex `(\+61)?\s?\(?0?\)?2\)?\s?\d\d\d\d\s?-?\d\d\d\d` matches:
     * 0299999999
     * +61299999999
     * 02 9999 9999
     * (02) 9999-9999
     * +61 2 9999 9999
     * +61 02 99999999
     * +61 (0)2 9999-9999
     
     NB: that the regex also matches some invalid formats such as:
     
     * (0)2)99999999
     * 02)99999999
     * 0)299999999
     
     However regexes are best suited to "dirty" jobs and start getting unwieldy for more complex formats. If more sophisticated parsing is required it is often better to promote the script to a language with parser libraries and write unit tests to capture accuracy. Alternatively a more permission regex (such as above) can be followed by a manual data cleaning if the dataset is small enough.

   b) Write an example phone number, for each specific phone number format that your regex would match.
   
   See above.

   c) Imagine that the full path of the directory is
   > /var/www/site1/uploads/phnumbers/
   
   Write a single-line or simple command that you could run from the shell (ideally Linux), to apply this regular expression to the files in the directory tree, and result in the simple list of phone numbers, one phone number per line.
   
   `grep -o "(\+61)?\s?\(?0?\)?2\)?\s?\d\d\d\d\s?-?\d\d\d\d" /var/www/site1/uploads/phnumbers/**/*`
   
   * `**` will expand to match all the descendent folders and `/*` will match all the files in them
   * `-o` will return only the matching segment of the line, i.e. the phone number
   * the result will be printed to stdout


### Software development

1.	Write a function/method/subroutine to determine if a string starts with an upper-case letter A-Z, *without* using any sort of isUpper()/isLower() or toUpper()/toLower() etc helper function provided by the language.  Your choice of language.

In python we can convert the first character to it's ascii code and do a range check:

```py
def isCapitalized(s):
  firstCharacter = s[0]
  asciiCode = ord(firstCharacter)
  return asciiCode >= ord("A") and asciiCode <= ord("Z")
```

2. Consider this statement:
   ```
   $a = implode(',',array_map(function($b,$c) {
     return str_replace(array('-','_',','), '', $b) . "x{$c}";
   },array_keys($d),$d));
   ```
   a) what language is it written in?
   
     PHP.
   
   b) at the point when this statement is executed, which (if any) pre-existing variable(s) does this statement use or rely on?
   
     `$d`.
   
   c) after this statement has executed, which (if any) variable(s) have been initialised or modified by the statement?
   
     `$a` will have been initialised as a string.
   
   d) taking your answer from b), give simple example value(s) for each used/relied-upon variable.  There is not a single correct answer, rather you should make an educated guess based on your interpretation of what the statement is doing.
   
     `$d` could be `array("hello_" => "world", "foo-bar" => "baz", "alice," => "bob")`
   
   e) what would be the output or effect of the statement, if you used your example value(s) from d) ?
   
     `helloxworld,foobarxbaz,alicexbob`
   
   f) describe what is happening in this statement
   
     * Given an associative array (`$d`)
     * Get all of the keys as strings (`array_keys`)
     * Zip them with a function in `array_map`
     * The function removes "_", "-" and "," in the key and concatenates with a "x" to the corresponding value in the array.
     * The resulting array of strings is joined together using "," as a delimiter
     * and the result is assigned to the variable `$a`.

3. Write a function in Go which returns the top two most frequent numbers from a list, in order of frequency first. For example:
   ```
   Given the list [1, 3, 3, 5, 5, 6, 6, 5, 3, 3]
   It should return [3, 5]
   ```
   
Answer (Go can be a bit clunky, requiring ad hoc types for jobs that are trivial in other languages):

```go
package main

import (
  "fmt"
  "sort"
)

type Pair struct {
  Key int
  Val int
}

func twoMostFrequent(arr []int) []Pair {
  counts := make(map[int]Pair)
  // Count each occurance of each element
  for _, x := range arr {
    count, present := counts[x]
    if present {
      counts[x] = Pair{ Key: x, Val: count.Val + 1 }
    } else {
      counts[x] = Pair{ Key: x, Val: 1 }
    }
  }
  
  // Get an array of Pairs
  pairs := make([]Pair, 0)
  for _, pair := range counts {
    pairs = append(pairs, pair)    
  }
  
  // Sort by frequency
  sort.Slice(pairs, func(i, j int) bool {
    return pairs[i].Val > pairs[j].Val
  })

  // Return two most frequent
  return pairs[0:2]
}

func main() {
  input := []int{1, 3, 3, 5, 5, 6, 6, 5, 3, 3}
  output := twoMostFrequent(input)
  fmt.Println("Two most frequent:", output[0].Key, output[1].Key)
}
```

4. Go to one of the Koala websites (au.koala.com, jp.koala.com)
   a) can you find our Shopify Storefront API key?  If so, what is it?
   
     From one of the graphql queries on the website there is the following header:
     ```
     X-Shopify-Storefront-Access-Token: 2893a926da7237b81af272bc47dc3491
     ```
     
   b) based on what you found in a), is this an acceptable state-of-affairs for a modern eCommerce website?  Why or why not?
   
     This is acceptable. The Access Token identifies to the Shopify API (https://koala-mattress.myshopify.com/api/2020-01/graphql) which shop (i.e. Koala) the API request is regarding and is orthogonal to authorization. If a dangerous operation is needed to be done then extra authorization (such as verifying a credit card or logging in) would be done to prevent anyone from being able to request a mattress with just an API call.
     
     There is likely a Shopify Secret/Credential that the Koala server has which IS secret and cannot be exposed to public users.

5. What will this PHP statement print?
   ```
   echo implode(' = ',['9 times 5','4' + '5']);
   ```
   
   "9 times 5 = 9" because PHP has weak typing and will automatically convert the strings "4" and "5" into numbers before adding them.

6. Using the students array below, write a javascript function to return an object containing:

  - The name of the class as the key.
  - The total attended lessons for each class.
  - The average amount of attended lessons for each class.

`students.json`

```json
{
  "students": [
    {
      "name": "Lulu Gearside",
      "class": "art",
      "attended": 35
    },
    {
      "name": "Matthew Milham",
      "class": "art",
      "attended": 11
    },
    {
      "name": "Dany Dufner",
      "class": "biology",
      "attended": 12
    },
    {
      "name": "Jeremy Doyle",
      "class": "biology",
      "attended": 3
    },
    {
      "name": "Tim O'Connor",
      "class": "biology",
      "attended": 10
    },
    {
      "name": "Charlie Wang",
      "class": "french",
      "attended": 12
    }
  ]
}
```

Expected output:

```js
{
  "art": {
    "total": 46,
    "average": 23,
  },
  "biology": {
    "total": 25,
    "average": 8,
  },
  "french": {
    "total": 12,
    "average": 12,
  },
}
```

Answer:

```js
// describeClasses or how I learned to stop worrying and love Array.reduce()
function describeClasses(studentData) {
  const { students } = studentData
  
  // Get a map of class names to arrays of attendence rates
  const classAttendence = students.reduce((obj, student) => {
    const cls = student.class
    if (!obj[cls]) {
      obj[cls] = []
    }
    obj[cls] = obj[cls].concat([student.attended])
    return obj
  }, {})
  
  // For each class, compute statistics
  const classStatistics = Object.entries(classAttendence).reduce((obj, entry) => {
    const [cls, attendance] = entry
    obj[cls] = {
      total: attendance.reduce((obj, d) => obj + d, 0),
    }
    obj[cls].average = Math.round(obj[cls].total / attendance.length)
    return obj
  }, {})
  
  // Merry Christmas
  return classStatistics
}
```
