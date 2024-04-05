# რთული CSS სელექტორები

## შესავალი

ჩვენ უკვე კომპორტულად უნდა ვიყოთ უბრალო CSS სელექტორებთან და არ უნდა გვიჭირდეს ელემენტების წამოღება, მაგრამ, ზოგჯერ უფრო რთული სელექტორები გვჭირდება. ამ გაკვეთილში ვისწავლით ამ სელექტორებზე.

ეს სელექტორები განსაკუთრებით მაშინაა გამოსადეგი, როდესაც არ შეგიძლიათ (ან არ გსურთ) HTML სტრუქტურაში ცვლილების განხორციელება.

არსებობს ბევვრი რთული სელექტორი, მაგრამ ამ შემთხვევაში მათგან ყველაზე სასარგებლოებს ვისწავლით.

აუცილებელია რომ ყოველი ახალი რამის სწავლისთანავე, გახსნათ კოდის რედაქტორი და თქვენით ჩაატაროთ "ექსპერიმენტები".

## გაკვეთილის მიმოხილვა

- გაიგებთ როგორ მუშაობს მშობელი და შვილი სელექტორები.
- განასხვავებთ ერთმანეთისგან pseudo (ფსევდო) კლასებსა და ფსევდო ელემენტებს.
- ისწავლით ყველაზე გამოყენებად ფსევდო ელემენტებსა და ფსევდო კლასებს.
- ისწავლით სხვადასხვა გზებს ატრიბუტის ან მისი ნაწილების მოსანიშნად.

## Child და Sibling კომბინატორი

ახლა ვისწავლოთ როგორ მივწვდეთ ელემენტს კლასების გამოყენების გარეშე, ამისთვის სამ ახალ სელექტორს ვიწსავლით.

`>` - Child კომბინატორი

`+` - მომიჯნავე Sibling კომბინატორი

`~` - ასევე sibling კომბინატორი

გამოვიყენოთ მაგალითები მათ სასწავლად.

```html
<main class="mshobeli">
  <div class="shvili group1">
    <div class="shvilishvili group1"></div>
  </div>
  <div class="shvili group2">
    <div class="shvilishvili group2"></div>
  </div>
  <div class="shvili group3">
    <div class="shvilishvili group3"></div>
  </div>
</main>
```

უკვე ნასწავლი სელექტორებით იცით, რომ თუ ყველა `shvili` და `shvilishvili` დივის მონიშვნა გვინდა `main` ელემენტის შიგნით დავწერთ ასე:

```css
main div {
  /* CSS კოდი */
}
```

მაგრამ თუ გვინდა მხოლოდ ერთი `shvili`-ს ან `shvilishvili`-ს მონიშვნა? სწორედ აქ გვეხმარება child კომბინატორი `>`. ეს მონიშნავს მხოლოდ პირდაპირ შვილებს.

```css
/* ეს მონიშნავს მხოლოდ დივებს, რომლებსაც აქვთ კლასი shvili */
main > div {
  /* CSS კოდი */
}

/* ეს მონიშნავს მხოლოდ დივებს, რომლებსაც აქვთ კლასი shvilishvili */
main > div > div {
  /* CSS კოდი */
}
```

სხვანაირად რომ ვთქვათ, child სელექტორი მონიშვნავს ელემენტებს, რომლებიც ერთი საფეხურით დაბლა დგანან მონიშვნის დამწყები ელემენტიდან. იმისათვის, რომ ავირჩიოთ ელემენტი, რომელიც ეგრევე მოყვება ჩვენს მიზანს (არის მომიჯნავე), ან იმავე დონეზეა, შეგვიძლია გამოვიყენოთ `+` სელექტორი.

```css
/* ეს მონიშნავს მხოლოდ იმ დივს, რომელსაც აქვს კლასი shvili group2 */
.group1 + div {
  /* CSS კოდი */
}

/* ეს მონიშნავს მხოლოდ იმ დივს, რომელსაც აქვს კლასი shvili group3 */
.group1 + div + div {
  /* CSS კოდი */
}
```

საბოლოოდ, თუ გინდათ აირჩიოთ ყველა სიბლინგი, რომელიც ელემენტს მოყვება, არა მხოლოდ პირველი, არამედ ყველა, შეგვიძლია გამოვიყენოთ `~` სელექტორი.

მაგალითად:

<iframe height="300" style="width: 100%;" scrolling="no" title="sibling combinator" src="https://codepen.io/xazy/embed/NWmxNad?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/NWmxNad">
  sibling combinator</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## pseudo-სელექტორები

სანამ pseudo-სელექტორებზე გადავალთ, ვისწავლოთ რა არის განსხვავება pseudo ელემენტებსა და pseudo კლასებს შორის. ფსევდო კლასების წინ არის ერთი ორწერტილი და მოქმედებს უკვე არსებულ HTML ელემენტებზე, ხოლო ფსევდო ელემენტების წინ არის ორი ორწერტილი და გამოიყენება ისეთი ელემენტების მოსანიშნად, რომელიც არ არსებობს მარქაფში. ეს თუ ვერ გაიგეთ, არ იდარდოთ, განვიხილოთ მაგალითები.

## pseudo-კლასები

ფსევდო კლასები გვთავაზობენ განსხვავებულ გზებს HTML ელემენტების მოსანიშნად. ისინი ბევრია, მაგრამ ახლა ყველაზე გამოსადეგი კლასები ვისწავლოთ.

### დინამიური და მომხმარებელზე დამოკიდებული ფსევდო-კლასები

ასეთი ფსევდო კლასები ხდის თქვენს გვერდს უფრო მეტად დინამიურსა და ინტერაქტიულს.

`:focus` ედება ელემენტს, რომელიც ამჟამადაა არჩეული მომხმარებლის მიერ მაუსის ან კლავიატურის გამოყენებით:

<iframe height="300" style="width: 100%;" scrolling="no" title=":focus example" src="https://codepen.io/xazy/embed/GRLoZBo?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/GRLoZBo">
  :focus example</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

`:hover` ზეგავლენას მოახდენს ელემენტზე, როდესაც მაუსს მივიტანთ ელემენტთან, რომელსაც ეს ადევს. ეს ხშირად გამოიყენება ღილაკებს და ლინკებს მეტი ეფექტის მისანიჭებლად და აღნიშნავს, რომ ინტერაქცია შეიძლება ამ ელემენტთან.

<iframe height="300" style="width: 100%;" scrolling="no" title=":hover example" src="https://codepen.io/xazy/embed/poBgyxa?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/poBgyxa">
  :hover example</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

`:active` ედება ელემენტებზე, რომელზე "დაკლიკვაც" შეგვიძლია. ამით მომხმარებელს ვაწვდით ინფორმაციას, რომ მათ ქმედებას ჰქონდა ეფექტი. 

<iframe height="300" style="width: 100%;" scrolling="no" title=":active example" src="https://codepen.io/xazy/embed/PogZNXG?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/PogZNXG">
  :active example</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

თუ დაკვირვებიხართ, როდესაც ლინკს დააწვებით, იასამნისფერი ხდება. ამ ფერს ბრაუზერები თავისით ადებენ, მაგრამ ამის შეცვლა შეგიძლიათ CSS-თი. 

```css
/* ეს სტილი დაედება ყველა ლინკს */
a {
  text-decoration: underline;
}

/* ეს სტილი დაედება ლინკებს, რომლებზეც არ გადავსულვართ */
a:link {
  color: blue;
}

/* ეს კი დაედება ლინკებს, რომლებსაც მომხმარებელმა დააკლიკა */
a:visited {
  color: purple;
}
```

## სტრუქტურული ფსევდო-კლასები

ახლა ვისწავლით მშობელში არსებული ელემენტების ფსევდო კლასებით მონიშვნას.

```html
<div class="leqsi">
  <p>
    შემოდგომა გაგვეპარა,  
    მიილია, მიიწურა.
    ვენახები ჩაიკრიფა, 
    დასაწური დაიწურა.
  </p>
  <p>
    მადლიანმა ღვინობისთვემ 
    კარი ტკბილად გაიხურა.
    მზემ სხივები აიკრიფა
    მიწამ ნისლი დაიხურა.
  </p>
  <p>
    შავ თალხებში გახვეული
    ტყე და ჭალა ჩაიბურა,
    ცამ შუბლ-წარბი შეიჭმუხნა
    და სათოვლედ დაიბურა.
  </p>
  <p>
    წყალი ჩადგა კალაპოტში
    როდიღაა მხიარული,
    მერცხალი ფრთას აღარა სცემს
    არც უგალობს მას ბულბული.
  </p>
  <p>
    შემოდგომა გაგვეპარა 
    არე-მარეს ნისლი ბურავს
    და საცაა დედამიწა
    ზამთრის საბანს დაიხურავს.
  </p>
</div>
```

`leqsi` დივში არის ხუთი პარაგრაფი. იმისათვის, რომ ავირჩიოთ პირველი პარაგრაფი, უნდა გამოვიყენოთ `:first-child` სელექტორი:

```css
.leqsi p:first-child {
  color: red;
}
```

ეს ასე განიმარტება: მოინიშნოს leqsi კლასის მქონე ელემენტში პირველი პარაგრაფი.

თუ გვინდა ავირჩიოთ ბოლო პარაგრაფი, უნდა გამოვიყენოთ `:last-child` სელექტორი:

```css
.leqsi p:last-child {
  color: green;
}
```

ეს ასე განიმარტება: მოინიშნოს leqsi კლასის მქონე ელემენტში ბოლო პარაგრაფი.

ასევე არსებობს კონკრეტული ელემენტის მონიშვნის გზა, `:nth-child()`-ის გამოყენებით.

```css
.leqsi :nth-child(2) {
  color: pink;
}

.leqsi :nth-child(4) {
  color: blue;
}
```

პირველი მონიშნავს ლექსში მყოფ მეორე პარაგრაფს, ხოლო მეორე - მეოთხე ადგილზე მყოფ პარაგრაფს.

<iframe height="300" style="width: 100%;" scrolling="no" title="pseudo selectors" src="https://codepen.io/xazy/embed/VwNejLe?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/VwNejLe">
  pseudo selectors</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ასევე ამ სელექტორის ბევრნაირად გამოყენებაც შეგვიძლია:

```css
  /* ირჩევს მეხუთე ელემენტს leqsi-ში */
.leqsi:nth-child(5)

  /* ირჩევს ყოველ მესამე ელემენტს leqsi-ში */
.leqsi:nth-child(3n)

  /* ირჩევს ყოველ მესამე ელემენტს leqsi-ში, ათვლას იწყებს მესამედან */
.leqsi:nth-child(3n + 3) 

  /* ირჩევს ყველა ლუწ ელემენტს leqsi-ში. */
.leqsi:nth-child(even) 
```

## pseudo-ელემენტები

ფსევდო ელემენტები, კლასებისგან განსხვავებით, გვაძლევს საშუალებას გავლენა გვქონდეს HTML-ს ნაწილებზე, რომლებიც ელემენტები არ არიან. 

`::marker` გვაძლევს საშუალებას გავსტილოთ `<li>` ელემენტების წინ მდგომი წერტილები ან ციფრები. ამ მაგალითში სიის წინ მყოფ ციფრებს წითელი ფერი დაედებათ, ხოლო წერტილებს ღია მწვანე.

```css
ol li::marker {
  color: red;
}

ul li::marker {
  color: lightgreen;
}
```

`::before` და `::after` გვაძლევს საშუალებას დავამატოთ ელემენტები CSS-ს გამოყენებით HTML-ს გარეშე:

```css
div::before {
  content: "before";
}
div::after {
  content: "after";
}
```

`::before` - ჩასვავს კონტენტს ელემენტის თავში, ხოლო `::after` ჩასვავს კონტენტს ელემენტის ბოლოში:

```html
<div>
  before
  <!-- დანარჩენი კოდი -->
  after
</div>
```

## ატრიბუტის სელექტორი

როგორც ვიცით, ატრიბუტი არის ყველაფერი, რომელიც HTML-ს გამხსნელ თეგიში იწერება, მაგალითად `src='picture.jpg` ან `href="www.xazy.ge`.

გადავხედო მაგალითებს:

- `[attribute]` - ეს სელექტორი მონიშვნავს ყველაფერს, რასაც აქვს ატრიბუტი. 

- `selector[attribute]` - ჩვენ შეგვიძლია გავაერთიანოთ ატრიბუტის სელექტორი სხვა ტიპის სელექტორებთან, მაგალითად კლასის ან ელემენტის სელექტორთან.

- `[attribute="value"]` - უფრო დასაზუსტებლად, შეგვიძლია გამოვიყენოთ `=` რათა მოვნიშნოთ სპეციფიური ატრიბუტი სპეციფიური მნიშვნელობით.

მათი გამოყენება:

```css
[src] {
  /* ეს მონიშნავს ყველა ელემენტს, რომელსაც აქვს src ატრიბუტი. */
}

img[src] {
  /* ეს მონიშნავს img ელემენტებს, რომლებსაც აქვთ src ატრიბუტი. */
}

img[src="puppy.jpg"] {
  /* ეს მონიშნავს img ელემენტს, რომელსაც აქვს src ატრიბუტი და ატრიბუტის მნიშვნელობაა "puppy.jpg" */
}
```

ახლა ვისწავლოთ უფრო ზოგადი ატრიბუტის სელექტორები.

- `[attribute^="value"]` - `^=` ეს მონიშნავს სტრიგებს დასაწყისიდან.

- `[attribute$="value"]` - `$=` ეს მონიშნავს სტრიგებს დასასრულიდან.

- `[attribute*="value"]` - `*=` ეს მონიშნავს ყველგან სტრინგის შიგნით.

უკეთ გასაგებად გამოვიყენოთ მაგალითები:

```css
[class^='aus'] {
/* კლასებიც ატრიბუტებია.
  ეს მონიშნავს კლასებს, რომლებიც იწყება 'aus'-ით:
  class='austria'
  class='australia'
*/
}

[src$='.jpg'] {
/* ეს მონიშნავს ყველა src ატრიბუტს, რომელიც ბოლოვდება '.jpg'-ზე:
src='puppy.jpg'
src='kitten.jpg'
*/
}

[for*='ill'] {
/* ეს მონიშნავს ყველა ატრიბუტს, რომელსაც აქვს შიგნით 'ill' ნებისმიერ ადგილას.
for="bill"
for="jill"
for="silly"
for="ill"
*/
}
```

## დავალება

<div className="homework"> 

1.  შეასრულეთ [CSS Diner](https://flukeout.github.io/), თქვენ უკვე იცით ბევრი სელექტორი, ამიტომ უმეტესობის გაკეთებას შეძლებთ.

2. შექმენით HTML დოკუმენტი და თავად სცადეთ როგორ მუშაობენ ეს სელექტორები.
</div>

## დამატებითი რესურსები

- [Free Code Camp](https://www.freecodecamp.org/news/css-selectors-cheat-sheet/)-ის სელექტორების "შპარგალკა".

- [smashing magazine](https://www.smashingmagazine.com/2009/08/taming-advanced-css-selectors/)-ს სტატია სელექტორებზე.

- [css-tricks](https://css-tricks.com/attribute-selectors/)-ის სელექტორების მოკლე მიმოხილვა.

- [pseudo-classes vs pseudo-elements](https://www.growingwiththeweb.com/2012/08/pseudo-classes-vs-pseudo-elements.html)

- [30 სელექტორი, რომელიც უნდა დაიმასოვროთ](https://webdesign.tutsplus.com/the-30-css-selectors-you-must-memorize--net-16048t)

- [child და sibling სელექტორები](https://css-tricks.com/child-and-sibling-selectors/)

- [როგორ გამოვიყენოთ ფსევდო კლასები](https://www.smashingmagazine.com/2011/03/how-to-use-css3-pseudo-classes/)