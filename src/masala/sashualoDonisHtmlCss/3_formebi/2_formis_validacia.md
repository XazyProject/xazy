# ფორმის ვალიდაცია

## შესავალი

ვალიდაციები გვაძლევს საშუალებას დავუწეროთ სპეციფიური წესები, თუ რა ინფორმაცია უნდა ჩაწეროს მომხმარებელმა ველში. როდესაც მომხმარებელი შეიყვანს ინფორმაციას, რომელიც არღვევს წესებს, ამოვარდება მესიჯი, რომელიც ეტყვის, თუ რა შეიყვანა არასწორად და როგორ გამოასწოროს ის.

ვალიდაციები არის უმნიშვნელოვანესი კარგად აწყობილ ფორმებში. ის იცავს ბექენდ სისტემას არასწორი ინფორმაციის გადაცემისგან.

ამ გაკვეთილში ჩვენ გავივლით ჩაშენებულ ვალიდაციებს, რომლების გამოყენებაც შეგიძლიათ HTML ფორმებთან. ჩვენ ასევე გავსტილავთ ამ ვალიდაციებს.

## გაკვეთილის მიმოხილვა

- ისწავლით რა არის ფორმის ვალიდაცია.
- ისწავლით როგორ გამოიყენოთ ჩაშენებული HTML ვალიდაციები.
- ისწავლით როგორ გააკეთოთ საკუთარი ვალიდაციები.

## Required ვალიდაცია

ჩვენ ხშირად დაგვჭირდება ზოგიერთი ველი გავხადოთ აუცილებლად შესავსები, ანუ ის აუცილებლად უნდა შეივსოს სანამ გაიგზავნება, მაგალითად იმეილი და პაროლი შესვლის ფორმაში.

იმისათვის, რომ გავხადოთ ველი აუცილებლად შესავსები, უნდა დაუმატოთ `required` ატრიბუტი:

```html
<input type="password" id="user_password" name="user_password" required>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="forms-required-validation" src="https://codepen.io/xazy/embed/ZEZKyKY?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/ZEZKyKY">
  forms-required-validation</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

კარგი UX (user experience)-სთვის ყოველთვის უნდა მივუთითოთ, რომელი ველებია აუცილებლად შესავსები. ამას ხშირად ფიფქის(*) დამატებით აკეთებენ ლეიბლზე, როგორც ზევით მოყვანილ მაგალითში.

## ტექსტის სიგრძის ვალიდაცია

ზოგერ გვსურს მომხმარებელს დავუწესოთ მინიმუმ ან მაქსიმუმ რამდენი სიმბოლოს გამოყენება შეეძლოს ველის შესავსებად. ხშირად შეხვდებოდით, რომ პაროლის არჩევისას მინიმუმ 8 სიმბოლო უნდა იყოს, ან სახელის არჩევისას განსაზღვრული სიგრძის სახელი.

### მინიმუმი სიგრძის ვალიდაცია

იმისათვის, რომ მინიმუმი სიგრძის ვალიდაცია გავაკეთოთ და დავუწესოთ მომხმარებელს მინიმუმ რამდენი სიმბოლოს გამოყენება შეუძლია, ვიყენებთ `minlength` ატრიბუტს, რომელსაც ციფრის მნიშვნელობას გადავცემთ და ეს ციფრი ასახავს იმ რაოდენობას, მინიმუმ რამდენი სიმბოლო გვინდა იყოს გამოყენებული:

```html
<textarea placeholder="რა ხდება?" minlength="3"></textarea>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="forms-min-length-validation" src="https://codepen.io/xazy/embed/JjVNJOW?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/JjVNJOW">
  forms-min-length-validation</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ჩაწერეთ სამზე ნაკლები სიმბოლო, რათა ნახოთ როგორ მოიქცევა ეს ვალიდაცია.

### მაქსიმუმი სიგრძის ვალიდაცია

იმისათვის, რომ მაქსიმუმი სიგრძის ვალიდაცია გავაკეთოთ და დავუწესოთ მომხმარებელს მაქსიმუმ რამდენი სიმბოლოს გამოყენება შეუძლია, ვიყენებთ `maxlength` ატრიბუტს, რომელსაც ციფრის მნიშვნელობას გადავცემთ და ეს ციფრი ასახავს იმ რაოდენობას, მაქსიმუმ რამდენი სიმბოლო გვინდა იყოს გამოყენებული:

```html
<textarea placeholder="რა ხდება?" maxlength="20"></textarea>
 ```

 <iframe height="300" style="width: 100%;" scrolling="no" title="forms-maximum-length-validations" src="https://codepen.io/xazy/embed/GRLmEQB?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/GRLmEQB">
  forms-maximum-length-validations</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ჩაწერეთ ოცზე მეტი სიმბოლო, რათა ნახოთ როგორ მოიქცევა ეს ვალიდაცია.

### შეზავებული ვალიდაცია

HTML გვაძლევს შესაძლებლობას დავაყენოთ იმდენი ვალიდაცია, რამდენიც ჩვენ გვსურს. მაგალითად ჩვენ შეგვიძლია დავუწესოთ ორივე, მინიმუმ და მაქსიმუმ ატრიბუტები:

```html
<textarea placeholder="რა ხდება?" minlength="5" maxlength="20"></textarea>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="forms-combining-validations" src="https://codepen.io/xazy/embed/gOyWRed?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/gOyWRed">
  forms-combining-validations</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## რიცხვის ფარგლების ვალიდაცია

ხშირად დაგვჭირდება მივუთითოთ რამდენი ციფრის ჩაწერა შეძლონ მომხმარებლებმა ველში.

ამის გაკეთება `min` და `max` ატრიბუტების გამოყენებით შეგვიძლია, რომელიც გვაძლევს შესაძლებლობას ქვედა და ზედა ზღვარი დავუწესოთ შეყვანილ მნიშვნელობას. min და max ატრიბუტები მხოლოდ რიცხვის ველებთან მუშაობენ, მაგალითად `number`, `dates` და `time` ინფუთები.

რეალურ პრაქტიკაში ამას იყენებენ რაიმე პროდუქტის რაოდენობის შესაზღუდად, ან როდესაც ირჩევთ რამდენ ბილეთს ყიდულობთ ფრენაზე.

### min ვალიდაცია

იმისათვის, რომ დავამატოთ მინიმუმი მნიშვნელობის ვალიდაცია, ვიყენებთ `min` ატრიბუტს, რომელსაც გადავცემთ ციფრს და ეს ციფრი განსაზღვრავს მინიმუმ ციფრს:

```html
<input type="number" id="quantity" name="quantity" min="1" value="0">
```

<iframe height="300" style="width: 100%;" scrolling="no" title="forms-min-validation" src="https://codepen.io/xazy/embed/QWPvgRW?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/QWPvgRW">
  forms-min-validation</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ვალიდაციის მოქმედებაში სანახავად, სცადეთ შეკვეთის განხორციელება, როდესაც რაოდენობა ნოლია.

### max ვალიდაცია

იმისათვის, რომ დავამატოთ მაქსიმუმი მნიშვნელობის ვალიდაცია, ვიყენებთ `max` ატრიბუტს, რომელსაც გადავცემთ ციფრს და ეს ციფრი განსაზღვრავს მაქსიმუმ ციფრს:

<iframe height="300" style="width: 100%;" scrolling="no" title="forms-max-validation" src="https://codepen.io/xazy/embed/WNWjOqN?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/WNWjOqN">
  forms-max-validation</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Pattern ვალიდაცია

იმისათვის, რომ დავრწმუნდეთ, მომხმარებლებისგან სწორ ინფორმაციას ვიღებთ, ზოგჯერ გვიწევს შეეყვანილი ინფორმაცია ემთხვეოდეს რაღაც ნიმუშს.

იმისათვის, რომ დავამატოთ ნიმუშს ვალიდაცია, ჩვენ უნდა მივცეთ `pattern` ატრიბუტი. მნიშვნელობაში კი ვუწერთ რაიმე ნიმუშს, რომელიც ინტერნეტში უნდა მოძებნოთ. ამ მაგალითში ჩვენ ვიყენებთ ნიმუშის ვალიდაციას, რათა დავრწმუნდეთ ამერიკის ზიპ კოდი სწორ ფორმატშია შეყვანილი (5 ნიშნა რიცხვი, რომელსაც მოჰყვება ტირე და კიდევ 4 ციფრი):

<iframe height="300" style="width: 100%;" scrolling="no" title="forms-pattern-basic-validation" src="https://codepen.io/xazy/embed/gOyWxbE?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/gOyWxbE">
  forms-pattern-basic-validation</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

არასწორი ზიპ კოდის შეყვანისას ამოვარდება წარწერა: “Please match the requested format”, რაც მოუწოდებს მომხმარებელს სწორი ფორმატის შეყვანისკენ, მაგრამ ეს არც ისე გამოსადეგია მომხმარებლისთვის, რადგან არ ეუბნება როგორ გამოასწოროს ეს შეცდომა.

ამისთვის კარგი პრაქტიკაა `placeholder` ატრიბუტის გამოენება, რათა აჩვენოთ მომხმარებლებს ნიმუში, თუ როგორ უნდა იყოს შეყვანილი ეს პატერნი.

<iframe height="300" style="width: 100%;" scrolling="no" title="forms-pattern-with-placeholder-validation" src="https://codepen.io/xazy/embed/RwOVZWE?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/RwOVZWE">
  forms-pattern-with-placeholder-validation</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

`title` ატრიბუტით მივუთითეთ, ის ტექსტი, რაც ამოვარდება არასწორად შევსების შემთხვევაში, რაც გაუადვილებს მომხმარებელს პრობლემის აღმოფხვრაში.

pattern ატრიბუტის გამოყენება მხოლოდ `<input>` ელემენტებზე შეგვიძლია. ზოგიერთ ინფუთ ელემენტს გაწერის გარეშეც აქვთ პატერნი, რაც ვალიდაციას უკეთებს ჩაწერილ ინფორმაციას. მაგალითად email ველი, რომელიც ამოწმებს იმეილის განლაგებას, შეიცავს თუ არა @-ს და ა.შ. ასევე URL ინფუთი, რომელიც ამოწმებს ნამდვილად შეიცავს თუ არა ლინკი http ან https-ს:

<iframe height="300" style="width: 100%;" scrolling="no" title="forms-built-in-pattern-validations" src="https://codepen.io/xazy/embed/dyLWzvg?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/dyLWzvg">
  forms-built-in-pattern-validations</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ვალიდაციის პატერნების ნახვა [შეგიძლიათ აქ](https://www.html5pattern.com/Names), თუ გადავალთ password გვერდზე, ვნახავთ, რომ თუ გვსურს პაროლი შეიცავდეს დიდ ასოს, პატარა ასოს, ციფრს, სპეციალურ სიმბოლოს და მინიმუმ 8 სიმბოლოს, ვწერთ ასე:

```html
<input type="password" id="user_password" name="user_password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" title="გთხოვთ შეიყვანეთ ვალიდური პაროლი, მაგალითად: Magaliti.24" placeholder="პაროლი" required>
```

## ვალიდაციის გასტილვა

ჩვენ შეგვიძლია მოვნიშნოთ ვალიდაციები, რომლებმაც გაიარეს ან ვერ გაიარეს ვალიდაცია ფსევდო-კლასის გამოყენებით და გავსტილოთ ისინი.

იმისათვის, რომ გავსტილოთ ვალიდაცია გავლილი ველი, ვიყენებთ `:valid` ფსევდო-კლასს, ხოლო ვალიდაცია ვერ გავლილი ველისთვის ვიყენებთ `:invalid`-ს.

ნახეთ მაგალითი:

<iframe height="300" style="width: 100%;" scrolling="no" title="forms-styling-validations" src="https://codepen.io/xazy/embed/gOyWxRV?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/gOyWxRV">
  forms-styling-validations</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

პირველ რიგში, ჩვენ ყველა ვალიდურ ველს ვადებთ მწვანე ჩარჩოს. იმეილის და URL-ს ინფუთებს აქვთ მწვანე ჩარჩო, რადგან მათი შევსება არ არის აუცილებელი (`required`), ანუ არის ვალიდური თავიდანვე.

როდესაც ველი არავალიდურია, ჩვენ ვაძლევთ წითელ ჩარჩოს. სცადეთ არასწორი იმეილის ან URL-ს ჩაწერა და ნახეთ როგორ მოიქცევა.

## შეჯამება

ჩაშენებული ვალიდაციები დაგეხმარებათ დარწმუნდეთ, რომ მომხმარებელს სწორი ინფორმაცია შეჰყავს. ისინი მარტივად და სწრაფად გამოიყენება. მაგრამ, აქვთ ლიმიტები.

ზოგჯერ თქვენ უნდა შექმნათ ვალიდაცია, რასაც ჩაშენებული ვალიდაციები ვერ აკეთებენ. მაგალითად ჩაწერილი პაროლის და პაროლის დადასტურების ველები ერთმანეთს უნდა ემთხვეოდნენ, ან იმის ვალიდაცია, მომხმარებლის ჩაწერილი username უკვე გამოყენებულია სხვის მიერ, თუ არა. ჩვენ ასევე ლიმიტირებულნი ვართ, თუ როგორ შეგვიძლია გავსტილოთ ვალიდაციის მესიჯები და მათი კონტენტი.

ამ შემთხვევაში უნდა ჩავრთოთ კრეატივი და შევქმნათ საკუთარი ვალიდაციები ჯავასკრიპტის და CSS-ს გამოყენებით. ამის გამოყენებას მომავალში ვისწავლით.

## დავალება

<div className="homework">
- გადაიკითხეთ [ფორმებზე და მათ ვალიდაციაზე გაკვეთილი](https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/). თქვენ შეგიძლია გამოტოვოთ “JavaScript and the Constraint Validation API” და “Creating a Custom Form Validator” სექციები.
- წაიკითხეთ [არტიკლი](https://www.silocreativo.com/en/css-rescue-improving-ux-forms/), როგორ გააუმჯობესოთ UX ფორმებში.
</div>

## დამატებითი მასალა

- [ხშირად გამოყენებული პატერნები](https://www.html5pattern.com/)
- [ვალიდაციის გასტილვა](https://threadreaderapp.com/thread/1400388896136040454.html)
- [10 წესი, რომელიც ვალიდაციისას უნდა დაიცვათ](https://www.nngroup.com/articles/errors-forms-design-guidelines/)
- [ისწავლეთ Regex](https://www.sitepoint.com/learn-regex/)
- [Regex პრაქტიკული მაგალითები](https://www.sitepoint.com/demystifying-regex-with-practical-examples/)