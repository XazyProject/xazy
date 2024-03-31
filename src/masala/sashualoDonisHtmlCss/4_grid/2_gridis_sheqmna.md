# გრიდის შექმნა

## შესავალი

თქვენ უკვე იცით რა არის CSS გრიდი, ახლა ვისწავლოთ მისი შექმნა. ამ გაკვეთილში გავაკეთებთ გრიდის კონტეინერს, დავამატებთ რიგებს, სვეტებს და დაშორებებს.

## გაკვეთილის მიმოხილვა

- გრიდის კონტეინერის გაკეთება
- implicit და explicit (განუსაზღვრელი და განსაზღვრული) გრიდებს შორის განსხვავება.
- გრიდებს შორის დაშორება.

## გრიდის დაყენება

ამ გაკვეთილით გაიგებთ რამდენად მარტივია გრიდის გაკეთება. მომდევნო გაკვეთილებში უფრო რთულ საკითხებს შევეხებით, მაგრამ ახლა ელემენტარულით დავიწყოთ.

### გრიდის კონტეინერი

გრიდზე შეგვიძლია ვიფიქროთ, როგორც კონტეინერზე და აითემებზე. როდესაც ელემენტი ხდება გრიდის კონტეინერი, მასში შედის მთლიანი გრიდი. ელემენტის გრიდის კონტეინერად გადაქცევისთვის ვიყენებთ `display: grid`-ს ან `display: inline-grid`-ს.

<iframe height="300" style="width: 100%;" scrolling="no" title="პირველი გრიდი | CSS Grid" src="https://codepen.io/xazy/embed/LYvLyjK?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/LYvLyjK">
  პირველი გრიდი | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ამ მაგალითში მშობელ ელემენტს ადევს `class="container"`, ის გავხადეთ გრიდის კონტეინერი მასზე დადებული `display:grid`-ით, მასში მყოფი დივები კი ავტომატურად გრიდის აითემები გახდნენ. 

გაითვალისწინეთ, რომ მხოლოდ პირდაპირი შვილები ხდებიან გრიდის აითემები. აითემ ელემენტს შიგნით შვილი რომ ჰყავდეს, მასზე გრიდი აღარ გავრცელდებოდა და არ იქნებოდა გრიდ აითემიმ. ამ მაგალითში პარაგრაფი გრიდის აითემი არაა:

```html
<!-- index.html -->

<div class="container">
  <div>Item 1</div>
  <div>Item 2
    <p>მე არ ვარ გრიდის აითემი!</p>
  </div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

მაგრამ როგორც ფლექსბოქსში, გრიდის აითემებიც შესაძლებელია გრიდის კონტეინერები გახდნენ. ანუ,  გრიდის შიგნით  გრიდის გაკეთება შესაძლებელია.

### ხაზები და გზები გრდიში

თუ ჩვენს მაგალითებს მიყვებით, შეამჩნევთ, რომ გრიდის არაფერი ეტყობა. ბევრი რესურსი CSS გრიდზე თავიდანვე ყუთების და შემოხაზული ცხრილების მაგალითებით იწყება. მაგრამ გრიდის კონტეინერსა და მის აითემებს რომ არ ედოთ  ჩარჩოები, ვერც შეამჩნევდით ამ ხაზებს გვერდზე.

თუ თქვენ დააინსპექტებთ ამ ელემენტებს ვებგვერდზე, შეამჩნევთ `grid` ნიშანს ელემენტის გვერძე. ეს განლაგების ოფცია გვაძლევს საშუალებას დავინახოთ გრიდის უხილავი ხაზები, გზები და გრიდის მთლიანი არეა.

### სვეტები და რიგები

რადგან უკვე გვაქვს გრიდის კონტეინერი და შიგნით რამდენიმე გრიდის აითემი, დროა მივუთითოთ სვეტები და რიგები. ეს შექმნის გრიდის გზას (გრიდზე სივრცეს ხაზებს შორის). 

სტილები `grid-template-columns` და `grid-template-rows` ადვილად საზღვრავს სვეტებსა და რიგებს. ამ გაკვეთლში სწორედ ამას გავაკეთებთ პიქსელების გამოყენებით. 

ზედა მაგალითს დავამატოთ ორი მწკრივი და ორი სვეტი:

<iframe height="300" style="width: 100%;" scrolling="no" title="Columns and Rows 1 | CSS Grid" src="https://codepen.io/xazy/embed/LYvLLPp?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/LYvLLPp">
  Columns and Rows 1 | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

თუ მეტი მწკრივის ან სვეტის დამატება გვსურს გრიდზე, შეგვიძლია მნიშვნელობის დამატებით გავაჩინოთ კიდევ ერთი გზა. თუ გვინდა მესამე სვეტის დამატება ზედა მაგალითზე:

<iframe height="300" style="width: 100%;" scrolling="no" title="Columns and Rows 2 | CSS Grid" src="https://codepen.io/xazy/embed/rNbwwNg?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/rNbwwNg">
  Columns and Rows 2 | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

გრიდის სვეტების და რიგების განსაზღვრა მოკლე ჩანაწერითაც შეგვიძლია. ჩვენი ზედა სტილები `grid-template-rows` და `grid-template-columns` შეგვიძლია `grid-template`-თი ჩავანაცვლოთ. ამ სტილში შეგვიძლია სვეტებისა და რიგების ერთად განსაზღვრა. ამ სტილის მნიშვნელობაში დახრილ ხაზამდე განვსაზღვრავთ რიგებს(rows), ხოლო სლეშის შემდეგ სვეტებს(columns). ახლა დავწეროთ იგივე, ოღონდ შემოკლებულად:

```css
/* styles.css */

.container {
  display: grid;
  grid-template: 50px 50px / 50px 50px 50px;
}
```

არაა აუცილებელი სვეტებსა და რიგებს ერთმანეთის მსგავსი მნიშვნელობები ჰქონდეთ. შევცვალოთ სვეტის მნიშვნელობები, ისე, რომ პირველი სვეტი სხვებზე ხუთჯერ დიდი იყოს:

<iframe height="300" style="width: 100%;" scrolling="no" title="Columns and Rows 3 | CSS Grid" src="https://codepen.io/xazy/embed/XWQggMW?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/XWQggMW">
  Columns and Rows 3 | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Implicit და Explicit (განუსაზღვრელი და განსაზღვრული) გრიდები

დავუბრუნდეთ თავდაპირველ მაგალითს, სადაც 2x2-ზე გვქონდა განლაგება გრიდ აითემების, რა მოხდება თუ დავამატებთ მეხუთე აითემს კონტეინერში `grid-template-column`-ის ან `grid-template-rows`-ის შეცვლის გარეშე?

<iframe height="300" style="width: 100%;" scrolling="no" title="Implicit Grid | CSS Grid" src="https://codepen.io/xazy/embed/yLrXpbO?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/yLrXpbO">
  Implicit Grid | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

შეამჩნევდით, რომ მეხუთე აითემი მოთავსდა გრიდში და ჩაჯდა მესამე რიგში, რომელიც ჩვენ არ მიგვითითებია. ეს განუსაზღვრელი გრიდის კონცეპტია და ასე ათავსებს ავტომატურად გრიდ აითემს თავისით, როდესაც ჩვენ არ გვაქვს განსაზღვრული განლაგება მათთვის.

`grid-template-columns`-ს და `grid-template-rows`-ს სტილების გამოყენებისას, ჩვენ განვსაზღვრავთ გრიდის გზებს, სადაც გრიდის აითემები განთავსდებიან. მაგრამ, როდესაც ეს გზები განსაზღვრული არაა, გრიდი თავისით კვალავს გზას. ზომები, რომლებიც `grid-template-columns` ან `grid-template-rows` სტილებს ადევს, არ გადაეცემა  ახალ განუსაზღვრელ განუსაზღვრელ გრიდის გზებს, მაგრამ შეგვიძლია განვუსაზღვროთ მნიშვნელობები ასეთ განუსაზღვრელ გრიდს.

განუსაზღვრელ გრიდებს `grid-auto-rows`-ის და `grid-auto-columns`-ის სტილების დახმარებით ვუწერთ ზომებს. ამ გზით ვრწმუნდებით, რომ ახალ განუსაზღვრელ გრიდის გზებს ექნება წინასწარ განსაზღვრული ზომები.

ვთქვათ გვინდა ახალ რიგებს ჰქონდეთ იგივე მნიშვნელობა, რაც განსაზღვრულს:

```css
/* styles.css */

.container {
  display: grid;
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
  grid-auto-rows: 50px;
}
```

ჩვეულებრივ, გრიდი ამატებს დამატებით კონტენტს განუსაზღვრელ რიგებს. ეს ნიშნავს, რომ ექსტრა ელემენტები დაემატება და დაემატება ვერტიკალურად. ამ ექსტრა კონტენტის დამატება ჰორიზონტალურადაც შეიძლება, მაგრამ ნაკლებად გამოყენებადია. ამას `grid-auto-flow: column` სტილის გამოყენებით შევძლებთ და განუსაზღვრელი გრიდის გზების ზომები შეგიძლიათ განსაზღვროთ `grid-auto-columns` სტილის დახმარებით. 

## Gap

დაშორება გრიდის რიგებსა და სვეტებს შორის შეგვიძლია განვსაზღვროთ `gap` სტილის გამოყენებით. თავად დაშორების ზომა რიგებისთვისაც და სვეტებისთვისაც ცალცალკე შეგვიძლია გავწეროთ. სვეტებისთვის - `column-gap`, ხოლო რიგებისთვის - `row-gap` სტილები. მაგრამ მოკლედაც შეგვიძლია ამის ჩაწერა.

სანამ gap-ს, ანუ დაშორებას, დავამატებთ ჩვენს გრიდს, დავამატოთ ჩარჩო, რათა უკეთ დავინახოთ.

<iframe height="300" style="width: 100%;" scrolling="no" title="Gap 1 | CSS Grid" src="https://codepen.io/xazy/embed/ZEZyvdX?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/ZEZyvdX">
  Gap 1 | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ახლა დავამატოთ პატარა დაშორება, რათა დავაშოროთ ჩვენი სვეტები ერთმანეთს:

<iframe height="300" style="width: 100%;" scrolling="no" title="Gap 2 | CSS Grid" src="https://codepen.io/xazy/embed/poBwpMP?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/poBwpMP">
  Gap 2 | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ახლა დავამატოთ დიდი დაშორება რიგებს შორის, რათა განსხვავებას მივხვდეთ:

<iframe height="300" style="width: 100%;" scrolling="no" title="Gap 3 | CSS Grid" src="https://codepen.io/xazy/embed/QWPgQNp?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/QWPgQNp">
  Gap 3 | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ასევე შემოკლებით, `row-gap`-ის და `column-gap`-ის ნაცვლად, შეგიძლიათ გამოიყენოთ `gap`, რომელშიც პირველი მნიშვნელობა რიგებს აშორებს, ხოლო მეორე - სვეტებს, მაგ: `gap: 20px 40px;` ან თუ ორივე ერთი ზომის გვინდა უბრალოდ ერთ ზომას დავუწერთ მნიშვნელობაში.

## პირველი გრიდის გაკვეთილის შეჯამება

ახლა უკვე იცით როგორ მარტივად მუშაობს გრიდი და როგორ მარტივად შეიძლება თქვენი ელემენტების განლაგების კონტროლი. შემდეგ რამდენიმე გაკვეთილში უფრო გავართულებთ და დავიხმარებთ გრიდის ატრიბუტებს.

## დავალება

<div className="homework">
- უყურეთ [ამ პატარა ვიდეოს](https://www.youtube.com/watch?v=8_153Zz4YI8) implicit და explicit გზების უკეთ გასაგებად.
- უყურეთ [ამ ვიდეოს](https://www.youtube.com/watch?v=0m5qgfX2TVQ) და დაიმახსოვრეთ გრიდის ტერმინოლოგია.
</div>

