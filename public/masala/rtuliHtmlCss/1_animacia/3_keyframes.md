# Keyframes

## შესავალი

ვისწავლოთ CSS-ს ანიმაციები keyframe-ს გამოყენებით.

## გაკვეთილის მიმოხილვა

- განსახვავებთ CSS ტრანზიციებს და CSS ანიმაციებს.
- ისწავლით ანიმაციების სუბ-სტილების კონფიგურაციას.
- ისწავლით როგორ განვსაზღვროთ ანიმაციის თანმიმდევრულობა.

## ანიმაცია VS ტრანზიცია

ანიმაციები გაძლევენ საშუალებას ელემენტების ანიმაციის, ერთი სტილიდან მეორე სტილზე. ეს ძალიან გავს ტრანზიციას, მაგრამ არის განსხვავებები:

- ტრანზიციები შექმნილია ელემენტის მდგომარეობის ერთიდან მეორეში შეცვლის დროს ანიმაციისთვის. მას შეუძლია "წრეზე ტრიალი"/loop-ზე ყოფნა, მაგრამ ამისთვის არ არის შექმნილი. ხოლო ანიმაციები სწორედ ამისთვისაა შექმნილი, რათა მოგვცეს ლუპზე ყოფნის საშუალება.
- ტრანზიციებს სჭირდებათ გამშვები, მაგალითად ფსევდო-კლასი `:hover` ან `:focus` და ა.შ. ანიმაციებს კი არ სჭირდებათ გამშვები. როდესაც გაქვთ ელემენტები და CSS, ანიმაცია თავისით დაიწყებს მუშაობას, რადგან ასე დაავალეთ.
- ტრანზიციები არ არის ისეთი მოქნილი, როგორც ანიმაციები. როდესაც ტრანზიციას განვსაზღვრავთ, ჩათვალეთ ამ ელემენტს უშვებთ სამოგზაუროთ, A წერტილიდან B წერტილამდე. მართალია `transition-timing-function` ადებს დროის ცვლილებებს, მაგრამ მოქნილობაში  მაინც ვერ მიუახლოვდება ანიმაციებს.

საბოლოოდ, ანიმაციებს და ტრანზიციებს აქვთ თავიანთი დანიშნულებები, ხოლო, რომელს გამოიყენებთ, თქვენით უნდა გადაწყვიტოთ. მაგალითად, თუ გამჭირვალობის(`opacity`)-ს შესაცვლელად ანიმაციას გამოვიყენებთ ზედმეტი წვალება იქნება, მაგრამ უფრო ჩახლართული რამის გასაკეთებლად, ანიმაციები იდეალურია.

## ანიმაციების სტილები

შევხედოთ ამ ანიმაციას და უკეთ გავიაზროთ ზემოთ დაწერილი.

<iframe height="300" style="width: 100%;" scrolling="no" title="keyframes 1 longhand" src="https://codepen.io/xazy/embed/abxYzQe?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/abxYzQe">
  keyframes 1 longhand</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

დააკვირდით, ანიმაცია უკვე მუშაობს და მეორდება, ანუ ლუპზეა. `@keyframes` როლს ცოტა ქვევით განვიხილავთ, ახლა ანიმაციის სტილებზე ვისაუბროთ:

```css
#ball {
  /* ... სხვა CSS სტილები ... */
  animation-duration: 2s;
  animation-name: change-color;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

ამ ნაწილს კონფიგურაციის ფაზა ქვია, სადაც განვსაზღვრავთ ანიმაციის სტილებს `#ball` ელემენტზე და ეს ანიმაციის შექმნის პირველი ნაწილია. ამ მაგალითში ჩვენ გვაქვს:

- `animation-duration`, რაც ანიმაციის ხანგრძლივობას გულისხმობს. ეს ნიშნავს, რომ მას სჭირდება ორი წამი `#ball` ელემენტზე ანიმაციის ციკლის დასრულებისთვის.
- განვსაზღვრეთ `animation-name` რომ შეცვლილიყო "change-color"-ზე, რაც `@keyframes` სექციისთვის მნიშვნელოვანია და შემდეგ სექციაში განვიხილავთ. ეს ჩვენით მოგონებული სახელია და არ არის რაიმე CSS მნიშვნელობა. შეგვეძლო დაგვეწერა "vashlatama", ან რაც მოგვესურვებოდა, უბრალოდ ამ ანიმაციას ეს სახელი უხდება.
- `animation-iteration-count` დავაყენეთ `infinite`-ზე, რაც გულისხმობს, რომ ანიმაცია უსასრულოდ იქნება გაშვებული. თქვენ შეგიძლიათ დააყენოთ 1-ზე, 2-ზე, ან რამდენჯერაც გსურთ ანიმაციის გამეორება.
- `animation-direction` დავაყენეთ `alternate`-ზე. ეს სტილი განსაზღვრავს, ჩვენს ანიმაციას ალტერნატიული მიმართულება მიეცეს ერთი ციკლის დასრულებისას, თუ საწყისი წერტილიდან დაიწყოს ისევ ანიმაცია. ამ მაგალითში ეს სტილი `#ball`-ის ფერს თანაბრად/სუფთად დააბრუნებს საწყის ფერზე და არ გადახტება პირდაპირ წითელზე.

## Keyframes

ახლა დროა გადავიდეთ ანიმაციის მეორე ნახევარზე და ვისწავლოთ `@keyframes`.

```css
@keyframes change-color {
  from {
    background-color: red;
  }

  to {
    background-color: green;
  }
}
```

`@keyframes` შემდეგ ვწერთ `change-color`-ს, რადგან ზევით ასე განვსაზღვრეთ სახელი. შემდეგ ვიყენებთ `from` (საიდან) და `to` (სადამდე) სტილებს, რათა შევცვალოთ `background-color` წითელი ფერიდან მწვანეზე `#ball`-ზე.

გასათვალისწინებელია, რომ keyframe ანიმაციისთვის იყენებს პროცენტებს, ანუ `from` და `to` ნიშნავს `0%`-ს და `100%`-ს. ასე შეგიძლიათ წაიკითხოთ: `from/0%`, რაც ნიშნავს "ნულ წამზე" და `to/100%` "ორ წამზე". 100% უდრის ორ წამს, რადგან `animation-duration`-ს ორი წამი დავუწერეთ მნიშვნელობაში. არ არსებობს წესი, რომლის გამოყენება სჯობია, `from/to`-სი, თუ `0%/100%`-ის. ეს თქვენზეა დამოკიდებული.

`@keyframes` ასევე განსაზღვრავს ერთ ანიმაციის ციკლს. თუ ჩვენ გვსურს შევცვალოთ `animation-iteration-count` წინა მნიშვნელობიდან 2-ზე, ამ დროს ბურთი შეიცვლის `background-color`-ს წითლიდან მწვანეზე, შემდეგ მწვანედან წითელზე და ანიმაცია შეჩერდება.

ახლა ვისწავლოთ ანიმაციების სტილების მოკლედ ჩაწერა და გავხადოთ უფრო მოქნილი. დააკვირდით ქვემოთ მოცემულ მაგალითს და წაიკითხეთ კოდი.

<iframe height="300" style="width: 100%;" scrolling="no" title="keyframes 2 shorthand" src="https://codepen.io/xazy/embed/OJGvPYx?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/OJGvPYx">
  keyframes 2 shorthand</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```css
#ball {
  /* ... სხვა CSS სტილები ... */
  background-color: red;
  animation: 2s change-color infinite alternate;
}

@keyframes change-color {
  from {
    background-color: red;
  }
  
  50% {
    width: 200px;
    height: 200px;
    background-color: blue;
  }

  to {
    background-color: green;
  }
}
```

აქ ჩვენ დავამატეთ კიდევ ერთი keyframe, როდესაც `animation-duration` არის 50%-ზე, ანუ 1 წამზე. ეს ნიშნავს, რომ, ამ დროს `background-color`-ს მიენიჭება ახალი მნიშვნელობა, ლურჯი და ასევე ბურთი ზომაში ორჯერ გაიზრდება. გაითვალისწინეთ, რომ დამატებითი keyframe ყოველთვის პროცენტულად უნდა ჩაიწეროს. მხოლოდ `0%/100%`-ს შეესაბამება `from/to`.

## დავალება

<div className="homework">

1. [წაიკითხეთ და თან დაწერეთ კოდი](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) MDN-ს სტატიიდან.

2. გადადით `animation` ფოლდერში, რომელიც ჩვენს [CSS დავალებების რეპოზიტორიაშია](https://github.com/XazyProject/css-davalebebi), გადაიკითხეთ ყველა README ფაილი სანამ დაიწყებთ დავალებების გაკეთებას ამ თანმიმდევრობით:
  - `01-button-hover`
  - `02-pop-up`
  - `03-dropdown-menu`

</div>

## დამატებითი რესურსები

- [უყურეთ ვიდეოს ანიმაციაზე და keyframes-ზე](https://www.youtube.com/watch?v=f1WMjDx4snI&list=PLqGj3iMvMa4LvJ8VctoXnPI0dtE40wfid&index=3)