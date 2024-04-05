# რთული გრიდის სტილები

## შესავალი

თქვენ უკვე ისწავლეთ, როგორ გააკეთოთ გრიდი, ზომები შეუცვალოთ გზებს და პოზიცია მიანიჭოთ გრიდის ელემენტებს სპეციფიურ რიგებსა და სვეტებს. ჩვენ ვიცით ყველა ხელსაწყოს გამოყენება იმისათვის, რომ სტატიკური გრიდი შევქმნათ, მაგრამ რა უნდა ვქნათ რესპონსული და დინამიური გახდეს?

ამ გაკვეთილში ვისწავლით ცოტათი რთულ გრიდის სტილებს, რაც ამის გაკეთებაში დაგვეხმარება.

## გაკვეთილის მიმოხილვა

- როგორ შევქმნათ რამდენიმე გრიდის გზა ადვილად `repeat` ფუნქციის გამოყენებით.
- როგო გავაკეთოთ გრიდის გზები `fr` ერთეულის დახმარებით.
- დავაყენოთ მინიმუმი, მაქსიმუმი და იდეალური გზის ზომის საზღვრები.
- გამოვიყენოთ `auto-fit` და `auto-fill` გრიდის დინამიური რიგებისა და სვეტების რიგების გასაკეთებლად.
- გამოვიყენოთ `auto-fit`/`auto-fill` `minmax()`-თან ერთად რესპონსული გრიდების გასაკეთებლად.

## დაყენება

შევქმნათ გრიდი ხუთი სვეტით და ორი რიგით და გავსტილოთ.

<iframe height="300" style="width: 100%;" scrolling="no" title="Advanced Properties | CSS Grid" src="https://codepen.io/xazy/embed/poBWLga?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/poBWLga">
  Advanced Properties | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ამ მაგალითში HTML-ს განხილვა არ დაგჭირდებათ, მაგრამ გადახედეთ CSS-ს და დააკვირდით, რომელი სტილი არ იცით და მიხვდით, რატომ არის აქ გამოყენებული.

### grid-item, p, img სელექტორები

ეს სტილები გრიდის აითემების გასასტილადაა, რათა უკეთ გამოიყურებოდეს, ამიტომ მათი განხილვა არ გვჭირდება.


### grid-container

კონტეინერზე ვიყენებთ `display:grid`-ს გრიდის შესაქმნელად, ხოლო შემდეგი სტილი აქამდე არ გაგმოგვიყენებია: `resize: both`. ეს სტილი აძლევს მომხმარებელს საშუალებას შეუცვალოს ზომები კონტეინერს ქვედა მარჯვენა კუთხეში კლიკით და გაზრდა-დაპატარავებით. გამოსადეგია, როდესაც დავიწყებთ სტილების გამოყენებას, რომლებიც ზომებს უცვლიან ჩვენს გრიდის გზებს გრიდის ზომის მიხედვით.

შეუცვალეთ ზომები: CodePen-ზე დააჭირეთ 0.5x-ს, 0.25x-ს, რათა გქონდეთ ადგილი კონტეინერის ზომების შესაცვლელად.

ასევე ვიყენებთ `overflow: auto`-ს, რაც სქროლს აჩენს კონტეინერზე, თუ კონტეინერი გრიდზე პატარაა.

ჩვენ ვიყენებთ `gap` და `padding` სტილებს, რაც უკეთ გადმოცემს ვიზუალს და გასაგებად უკეთესია.

`border` და `background-color` კონტეინერს ლამაზს ხდის.

```css
grid-template-rows: 150px 150px;
grid-template-columns: 150px 150px 150px 150px 150px;
```

იმისათვის, რომ გაგვეკეთებინა ორი რიგი და ხუთი სვეტი, თითოეული რიგისა და სვეტის გზები ინდივიდუალურად განვსაზღვრეთ.

დამღლელია.

ამ შემთხვევაში ჩვენ მხოლოდ 2x5-ზე გრიდი გავაკეთეთ, რომელიც ათ აითემს იტევს. წარმოიდგინეთ ამ მეთოდის გამოყენება სვეტებისა და რიგებისთვის, რომელიც ასობით აითემს იტევს.

ამიტომ, გვინდა `repeat()`.

### Repeat, ანუ გამეორება

`repeat()`, ანუ გამეორება, CSS ფუნქციაა გრიდისთვის, რაც გვაძლევს შესაძლებლობას განვსაზღვროთ რიგებისა და სვეტების რაოდენობა და ზომა ისე, რომ ინდივიდუალურად და ცალცალკე არ მოგვიწიოს გაწერა. მაგალითად:

```css
.grid-container {
  grid-template-rows: 150px 150px;
  grid-template-columns: 150px 150px 150px 150px 150px;
}
```

შეიძლება დავწეროთ ასე:

```css
.grid-container {
  grid-template-rows: repeat(2, 150px);
  grid-template-columns: repeat(5, 150px);
}
```

ნახეთ თქვენითაც:

<iframe height="300" style="width: 100%;" scrolling="no" title="repeat | CSS Grid" src="https://codepen.io/xazy/embed/zYXEWwe?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/zYXEWwe">
  repeat | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Fractional ერთეულები

რადგან უკვე ვიცით როგორ შევქმნათ სწრაფად ბევრი გრიდის გზა, დროა ვისწავლოთ როგორ გავხადოთ დინამიური. დინამიური ამ კონტექსტში ნიშვნავს მოქნილს ან რესპონსულს, რაღაც გაგებით. დინამიურის საპირისპიროა სტატიკური, ან გაფიქსული მინიჭებულ სიმაღლეზე, მაგალითად 150 პიქსელზე, რომელიც გამოვიყენეთ გრიდის შექმნისას.

**ფრაქციული ერთეულების**, ასევე ცნობილი, როგორც `fr`, გამოყენებით გრიდის აითემებს დინამიურს გავხდით.

`fr` ერთეული არის გრიდში დარჩენილი სივრცის ათვისების გზა. მაგალითად, თუ ჩვენ გვაქვს ოთხ სვეტიანი გრიდი, ჯამური სიგანით `400px` და თითოეულ სვეტს უწერია `1fr`, თითოეული სვეტი მიიღებს ერთ ნაწილს ხელმისაწვდომი სივრციდან, ამ შემთხვევაში თითოეული იქნება 100 პიქსელი.

ახლა შევხედოთ რა მოხდება, თუ ჩვენს სვეტების და რიგების გზებს მივანიჭებთ დინამიურ `1fr`-ს, სტატიკური 150 პიქსელისგან განსხვავებით:

<iframe height="300" style="width: 100%;" scrolling="no" title="fr Unit 1 | CSS Grid" src="https://codepen.io/xazy/embed/zYXEXKG?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/zYXEXKG">
  fr Unit 1 | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ალბათ შეამჩნევდით, რომ ჩვენი გრიდის აითემები მთლიანი გრიდის სიმაღლეს და სიგანეს ავსებენ. ახლა დააპატარავეთ 0.25x-ით და სცადეთ მათი ზომის შეცვლა.

ჩვენს ასევე შეგვიძლია ვუთხრათ გრიდის აითემებს, რომ დარჩენილი სივრცე არაპროპორციულად გადაანაწილონ. მაგალითად, თუ ჩვენ გავყოფთ ხუთ სვეტს, საიდანაც პირველ ორს მივანიჭებთ `2fr`-ს და დარჩენილ სამს `1fr`-ს, პირველი ორი გზა იქნება ორჯერ დიდი სირცე ათვისებული სხვებთან შედარებით. შეადარეთ ეს მაგალითი წინას:

<iframe height="300" style="width: 100%;" scrolling="no" title="fr Unit 2 | CSS Grid" src="https://codepen.io/xazy/embed/MWRERbM?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/MWRERbM">
  fr Unit 2 | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ამ მაგალითში `grid-template-columns` ცოტათი განსხვადება, დააკვირდით რა წერია:

```css
grid-template-columns: repeat(2, 2fr) repeat(3, 1fr);
```

უკეთესი განმარტება: ჩვენს გრიდში, პირველი ორი სვეტი არის `2fr`, ხოლო დანარჩენი სამი სვეტი `1fr`. ეს ნიშვნავს, რომ გრიდის დინამიურად შეკუმშვისა და გაზრდის დროს, სვრცე გადანაწილდბა განსხვავებულად. პირველი ორი სვეტი მაინც ორჯერ დიდი იქნება დანარჩენებზე.

ასევე შეგვიძლია გამოვიყენოთ სტატიკური ერთეულები (მაგ. პიქსელი) და დინამიური ერთეულები (მაგ. fr) ერთ გრიდში.

<iframe height="300" style="width: 100%;" scrolling="no" title="fr and px Units | CSS Grid" src="https://codepen.io/xazy/embed/wvZrZmQ?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/wvZrZmQ">
  fr and px Units | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ზომების შეცვლისას მხოლოდ fr ერთეულის მქონე აითემები შეიცვლიან ზომას, ხოლო აითემები, რომელთაც პიქსელი აქვთ გაწერილი, იგივე რჩებიან.

## მინიმუმი და მაქსიმუმი გზის ზომები: min() და max()

როდესაც გრიდს ძალიან ვაპატარავებთ, უნდა დავრწმუნდეთ, რომ ბრაუზერი შეაჩერებს შეკუმშვას `min-content` მნიშვნელობამდე. მაგრამ, ამას ყოველთვის არ უნდა დავეყრდნოთ. უკეთესია გადაწყვიტოთ რამდენად პატარა ან დიდი უნდა იყოს თქვენი კონტენტი, ექსტრემულ სიტუაციებშიც.

უკვე ვისწავლეთ `min()` და `max()` ფუნქციებზე განვლილ CSS ფუნქციების ლექციაში. `min()` გვიბრუნებს მითითებულ მნიშვნელობებიდან პატარას, ხოლო `max()` პირიქით. მაგ: `min(100px, 200px)` დაგვიბრუნებს `100px` მნიშვნელობას, ხოლო `max(100px, 200px)` დაგვიბრუნებს `200px`-ს.

თქვენ შეგიძლიათ მიაწოდოთ ამ ფუნქციებს იმდენი არგუმენტი, რამდენიც გინდათ:

```css
.grid-container {
  grid-template-rows: repeat(2, min(100px, 200px, 300px, 400px, 500px));
  grid-template-columns: repeat(5, max(100px, 200px, 300px, 400px, 500px));
}
```

რათქმაუნდა, უაზრობაა მივცეთ ამ ფუნქციებს სტატიკური ერთეულები, რადგან კალკულაციას აზრი არ ექნება: პატარა ან დიდი მნიშვნელობები ყოველთვის დაბრუნდება. ზედა მაგალითში გრიდის რიგებს ყოველთვის ექნებათ ზომა `100px` (ხუთი მნიშვნელობიდან ყველაზე პატარა) და გრიდის სვეტებს ყოველთვის ექნებათ ზომა `500px` (უდიდესი ხუთიდან). მაგრამ, როდესაც მივანიჭებთ დინამიურ მნიშვნელობას არგუმენტად, ჩვენ ამ ფუქნციების ნამდვილ პოტენციალს ვიყენებთ, განსაკუთრებით გრიდის კონტექსტში:

```css
.grid-container {
  grid-template-rows: repeat(2, min(200px, 50%));
  grid-template-columns: repeat(5, max(120px, 15%));
}
```

ამ მაგალითში, გრიდის რიგის ზომა გამოითვლება `200px` და `50%` მნიშვნელობიდან. ბრაუზერი შეადარებს ორივე მნიშვნელობას და მიანიჭებს იმ მნიშვნელობას, რომელიც უფრო პატარაა ჩვენი გრიდის რიგის. ეს გრიდს ეუბნება: გრიდის გზის ზომა უნდა იყოს გრიდის ვერტიკალური სივრცის (რადგან განვსაზღვრავთ რიგს) 50%, *თუ* ეს რიცხვი არ აჭარბებს `200px`-ს. განსაკუთრებით, თუ ადებთ `max-height`-ს გზას.

ხოლო, გრიდის სვეტის ზომა გამოითვლება `120px` და `15%` მნიშვნელობებიდან. ჩვენ მინიმუმ სიგანეს გრიდის სიგანეს ვუყენებთ `120px`-ზე. შეამოწმეთ მაგალითი და შეცვალეთ ზომები უკეთ გასაგებად:

<iframe height="300" style="width: 100%;" scrolling="no" title="min and max | CSS Grid" src="https://codepen.io/xazy/embed/poBWBxo?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/poBWBxo">
  min and max | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## დინამიური მინიმუმი და მაქსიმუმი ზომები

### minmax()

`minmax()` არის CSS ფუნქცია, რომელიც გრიდთან გამოიყენება. ამის გამოყენება მხოლოდ ამ CSS სტილებთან შეიძლება:

- `grid-template-columns`
- `grid-template-rows`
- `grid-auto-columns`
- `grid-auto-rows`

ეს არის ფუნქცია, რომელიც მხოლოდ ორ არგუმენტს იღებს:

1. მაქსიმუმ ზომას, რაც გრიდის გზა შეიძლება იყოს
2. მინიმუმ ზომას, რაც გრიდის გზა შეიძლება იყოს

`min()` და `max()` ფუნქციებისგან განსხვავებით, აქ უაზრო არ იქნება სტატიკური მნიშვნელობების გადაწოდება ორივე არგუმენტად.

ნახეთ `minmax()`-ის მაგალითი სტატიკური მნიშვნელობებით:

```css
.grid-container {
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, minmax(150px, 200px));
}
```

`grid-template-columns`-ზე დადებული `minmax()`-ის მნიშვნელობებით, თითოეული გრიდის აითემების სიგანე გაიზრდება და შეიკუმშება გრიდის კონტეინერთან ერთად, როდესაც ჰორიზონტალურად ზომას შევუცვლით. გრიდის შეკუმშვასთან ერთად, სვეტის გზები შეწყვეტენ შეკუმშვას `150px`-ზე, გრიდის გაზრდასთან ერთად, შეწყვეტენ ზრდას `200px`-ზე. ნახეთ თავად:

<iframe height="300" style="width: 100%;" scrolling="no" title="minmax | CSS Grid" src="https://codepen.io/xazy/embed/XWQeQoj?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/XWQeQoj">
  minmax | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### clamp()

განსხვავებით `minmax()`-სგან, `clamp()` არის CSS ფუნქცია რომლის გამოყენებაც ყველგან შეიძლება. ესეც ვისწავლეთ, მაგრამ გადავიმეოროთ:

`clamp(მინიმუმი-ზომა, იდეალური-ზომა, მაქსიმუმი-ზომა)`

ეს გვაძლვეს საშუალებას აითემმა შეიცვალოს ზომა სანამ მინიმუმ ან მაქსიმუმ მნიშვნელობებს არ მიაღწევს.

რადგან `clamp()`-ის ფუნქციაა მოქნილი გზის გაკეთება, ჩვენ უნდა გამოვიყენოთ დინამიური მნიშვნელობა "იდალური-ზომის" ადგილას და როგორც წესი, სტატიკური მნიშვნელობა მინიმუმ და მაქსიმუმ ზომებისთვის, მიუხედავად იმისა, რომ აქაც შეგვიძლია დინამიური მნიშვნელობის გამოყენება.

ეს არაა გრიდის მაგალითი, გრიდს მალე მივუბრუნდებით:

```css
.non-grid-example {
  width: clamp(500px, 80%, 1000px);
}
```

ეს ელემენტი, რომელიც ჩავთვალოთ რომ დივია, იქნება მშობელი ელემენტის სიგანის 80%, ხოლო თუ ის 500 პიქსელზე პატარაა, იქნება 500 პიქსელი და თუ 1000 პიქსელზე დიდია, იქნება 1000 პიქსელი.

გადავინაცვლოთ გრიდზე:

```css
.grid-container {
  grid-template-columns: repeat(5, clamp(150px, 20%, 200px));
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="clamp | CSS Grid" src="https://codepen.io/xazy/embed/RwOLOvJ?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/RwOLOvJ">
  clamp | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

გზები არიან `20%` კონტეინერის სიგანის, სანამ არ მიარტყავენ მაქსიმუმ და მინიმუმ მნიშვნელობას.

`clamp()` და `minmax()` ფუნქციების გამოყენება ძალიან კარგი მეთოდია გრიდების რესპონსიულობისთვის.

## auto-fit და auto-fill

ეს ორი მნიშვნელობები არიან `repeat()` ფუნქციის სეციფიკაციები, მაგრამ ესენი გაკვეთილის ბოლოსკენ მოვიტოევთ, რადგან კარგად გასაგებად `minmax()` ფუნქციის ცოდნა გვინდოდა. ამ შემთხევაში: თქვენ გინდათ მისცეთ თქვენს გრიდს სვეტების რაოდენობა, რომლებიც არიან მოქნილები გრიდის ზომასთან მიმართებით. მაგალითად, თუ ჩვენი გრიდი მხოლოდ `200px`-ის სისქისაა, ალბათ დაგვჭირდება მხოლოდ ერთი სვეტი. თუ 400 პიქსელია ალბათ ორი და ა.შ. ამ პრობლემის მოგვარება `auto-fit`-ის და `auto-fill`-ის გამოყენებით შეგვიძლია.

ორივე ფუნქცია დააბრუნებს *უდიდეს არსებულ დადებით რიცხვს* გრიდის აითემების კონტეინერიდან "გაჟონვის" გარეშე. აი მაგალითად:

```css
.example {
  display: grid;
  width: 1000px;
  grid-template-columns: repeat(auto-fit, 200px);
}
```

ამ გრიდში, ჩვენ გვაქვს სიგანე `1000px` და ვეუბნებით, რომ შეავსოს სვეტებით, რომელთა თითოეულ გზას ექნება `200px`. 

მაგრამ უკეთესი გამოყენება `auto-fit`-ის და `auto-fill`-ის `minmax()`-თან ერთად ხდება. `minmax()`-ით, ჩვენ შეგვიძლია ვუთხრათ ჩვენს გრიდს, რომ გვსურს იმდენი სვეტი, რამდენის შესაძლებლობაც გვაქვს. მინმაქსის გამოყენებით განვსაძღვრავთ თითოეული სვეტის ზომას.

```css
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="autofit 1 | CSS Grid" src="https://codepen.io/xazy/embed/ExJwJzW?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/ExJwJzW">
  autofit 1 | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

დააკვირდით, როდესაც ზომას ვუცვლით, სვეტები თავისით ხვდება, რმდენი ჩაეტევა (შეუცვალეთ ზომა 0.5x, 0.25x-ით).

რა ხდება `repeat(auto-fit, minmax(150px, 1fr));`-ში?
დაიმახსოვრეთ, რომ `auto-fit` აბრუნებს უდიდეს არსებულ დადებით რიცხვს, ისე რომ არ გაცდეს გრიდს. პირველად, ბრაუზერმა უნდა იცოდეს რამდენად განიერია გრიდი: ამ შემთხვევაში ფანჯრის ზომაა. ჩათვალეთ, რომ ეს ფანჯარა `500px` სიგანისაა. შემდეგ, ბრაუზერმა უნდა იცოდეს რამდენი გრიდის სვეტი ჩაეტევ ამ სიგანეში. ამისთვის იყენებს მინიმუმ მნიშვნელობას `minmax()` ფუნქციიდან, ამ შემთხვევაში მნიშვნელობა 150 პიქსელია. თუ ჩვენი ფანჯარა `500px`-ის სიგანისაა, ეს ნიშნავს ჩვენი გრიდი დაარენდერებს სამ სვეტს. იმის შემდეგ, რაც ბრაუზერი მიხვდება, რამდენი სვეტის ჩატევა შეგვიძლია, ის უცვლის ზომას სვეტებს მაქსიმუმ მნიშვნელობამდე, რომელიც `minmax()` ფუნქციაში გვაქვს მითითებული. ამ მაგალითში, ჩვენი მაქსიმუმი ზომაა `1fr`, ანუ სამივე სვეტის ზომას თანაბარი სივრცე ექნება ათვისებული. ფანჯრის ზომის შეცვლასთან ერთად, ეს გამოთვლები თავისით მოხდება.

### რატომ წერია auto-fill?

ხშირ შემთხვევებში, `auto-fill` მუშაობს, როგორც `auto-fit`. განსხვავება მაშინ იგრძნობა, როდსაც ცოტა აითემია, რომლებსაც შეუძლიათ მთლიანი გრიდის რიგის შევსება. როდესაც გრიდი იზრდება იმხელაზე, რომ კიდევ ერთი გრიდის აითემის ჩატევა შეიძლება, მაგრამ აღარ არის დარჩენილი, `auto-fit` გახდის აითემებს `max` ზომას.
`auto-fill`-ის გამოყენებით, გრიდის აითემები დაუბრუნდებიან `min` ზომას, როცა სივრცე გახდება ხელმისაწვდომი სხვა გრიდის აითემის დამატებისთვის, მიუხედავად იმისა, თუ არ გვაქვს.

ამის რეალობაში სანახავად, შეხედეთ ამ ორ მაგალითს, პირველი იყენებს `auto-fit`-ს და მეორე `auto-fill`-ს და ნახეთ რა ხდება გრიდის ჰორიზონტალურად ზომაში შეცვლისას:

<iframe height="300" style="width: 100%;" scrolling="no" title="autofit 2 | CSS Grid" src="https://codepen.io/xazy/embed/VwNMOZx?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/VwNMOZx">
  autofit 2 | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<iframe height="300" style="width: 100%;" scrolling="no" title="autofill | CSS Grid" src="https://codepen.io/xazy/embed/gOyGJYZ?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/gOyGJYZ">
  autofill | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## დავალება

<div className="homework">

1. გადახედეთ [მეოთხე ნაწილს CSS-Tricks-ზე](https://css-tricks.com/snippets/css/complete-guide-grid/#grid-properties) გრიდის სტილების შესახებ.
2. გადადით ჩვენს CSS დავალებების რეპოზიტორიაში და გააკეთეთ დავალებები ამ თანმიმდევრობით:
  - `grid-layout-2`
  - `grid-layout-3`

</div>

## დამატებითი რესურსები

- გაიგეთ მეტი [განსხვავებებზე](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/) `auto-fit` და `auto-fill`-ის შესახებ.

- გადახედეტ ვიდეოს [auto-fit ზე და auto-fill-ზე](https://www.youtube.com/watch?v=qjJR3qYCd54).