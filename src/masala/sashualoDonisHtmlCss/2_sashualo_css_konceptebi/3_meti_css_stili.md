# მეტი CSS სტილი

## შესავალი

კიდევ ბევრი რამ უნდა ვისწავლოთ იმისათვის, რომ ჩვენთვის სასურველი ვებსაიტები ავაწყოთ და შევძლოთ ყველაფრის გაკეთება. ამ გაკვეთილში ამ ცოდნას კიდევ უფრო გავიღმრავებთ.

არსებობს ასობით CSS სტილი, მაგრამ საბედნიეროდ ყველას დამახსოვრება არ გვჭირდება. სტილები, რომლებსაც ყოველდღიურად გამოვიყენებთ არ არის ბევრი. განვიხილოთ ისენი, რომლებსაც ყოველდღიურად გამოვიყენებთ.

## გაკვეთილის მიმოხილვა

- ისავლით ბევრ გამოსადეგარ CSS სტილს.

## Background

ჩვენ უკვე გვაქვს საკმაო გამოცდილება ფონის ფერის შეცვლის ელემენტებზე, მაგრამ `background` უფრო მეტს შვრება. `background` შემოკლებულია რვა სხვადასხვა ფონთან დაკავშირებულ სტილთან. ფერის შეცვლის გარდა შესაძლებელია ფონზე სურათების ჩასმა, მათთვის პოზიციის მინიჭება, როგორ ჩაეტიოს მითითებულ ზომებში, გამეორდეს თუ არა და ა.შ.

როგორც უკვე ავღნიშნეთ ბევრი რამის დამახსოვრება საჭიროა არაა, თქვენ მხოლოდ გევალებათ იცოდეთ, რომ ასეთი რამ არსებობს და მოიძიოთ ინფორმაცია მსაზე.

ნახეთ **მხოლოდ** პირველი მაგალითები [MDN დოკუმენტაციაში](https://developer.mozilla.org/en-US/docs/Web/CSS/background).

## Border

თქვენ უკვე იცით `border` და `border-radius`. `border` არის შემოკლებული სტილი, რომელსაც შეგვიძლია მივანიჭოთ რამდენიმე მნიშვნელობა, მაგრამ არ არის ისეთი ჩახლართული, როგორიც `background`. `border`-ით ვსაზღვრავთ ზომას, სტილს და ფერს.

```css
div {
  border: 1px solid red;
}

p {
  border: 4mm ridge rgba(211, 220, 50, .6);
}
```

პირველ ადგილზე იწერება ზომა, მეორეზე როგორი სტილის იყოს ბორდერი, ხოლო ბოლოს ფერი. [გადაავლეთ თვალი MDN-ს დოკუმენტაციას](https://developer.mozilla.org/en-US/docs/Web/CSS/border), რათა უკეთ გაიგოთ ამის შესახებ.

`border-radius` უცვლის ფორმას ამ ბორდერის კუთხეებს, რაც უფრო გავზრდით მის მნიშვნელობას, უფრო მომრგვალებული იქნება.

```css
div {
  border-radius: 10px;
}
```

ამ შემთხვევაში დივის ყველა კუთხე 10 პიქსელით მომრგვალდება.

ჩვენ ასევე შეგვიძლია მხოლოდ ერთ-ერთი კუთხე მოვამრგვალოთ, კონკრეთულად იმ კუთხის მონიშვნით:

- border-top-left-radius - ამრგვალებს ზედა მარცხენა კუთხეს.
- border-top-right-radius - ამრგვალებს ზედა მარჯვენა კუთხეს.
- border-bottom-right-radius - ამრგვალებს ქვედა მარჯვენა კუთხეს.
- border-bottom-left-radius - ამრგვალებს ქვედა მარცხენა კუთხეს.

ხოლო თუ გვინდა ყველა კუთხე სხვადასხვა ზომის იყოს, ვწერთ ასე:

```css
div {
 border-radius: 10% 30% 50% 70%;
}
```

პირველი მნიშვნელობა ეხება ზედა მარცხენა კუთხეს, მეორე - ზედა მარჯვენა კუთხეს, მესამე - ქვედა მარჯვენა კუთხეს, მეოთხე - ქვედა მარცხენა კუთხეს.

## box-shadow

`box-shadow` ადებს ჩრდილის ეფექტს ელემენტის გარშემო. ამის გაკეთება ონლაინ გენერატორებით შეგიძლიათ, მაგალითად [cssgenerator.org](https://cssgenerator.org/box-shadow-css-generator.html) და [box-shadow.dev](https://box-shadow.dev/)

## overflow

`overflow`-თი ვეუბნებით კონტენტს, რა ქნას, თუ მის მშობელ ელემენტში ვერ ეტევა. ანუ ვთქვათ გვაქვს დივი, რომლის სიმაღლე და სიგანეა 100 პიქსელი, ხოლო მასში გვაქვს სურათი, რომლის იმაღლე და სიგანე 200 პიქსელია. ამ შემთხვევაში თუ დივს დავუწერთ `overflow: hidden;`-ს, რაც დივის საზღვრებს სცდება, მოიჭრება და აღარ გამოჩნდება.

`hidden`-ის გარდა, აქვს კიდევ რამდენიმე მნიშვნელობა.

`overflow: scroll;` - უჩენს სქროლს, ანუ თუ მშობლის საზღვრებს სცდება კონტენტი, ამ მშობელს გაუჩნდება სქროლი.

`overflow: visible;` - ჰიდენისგან განსხვავებით, კონტენტი არ მოიჭრება და ელემენტის გარეთაც გამოჩნდება.

მაგალითები იხილეთ აქ:

<iframe height="300" style="width: 100%;" scrolling="no" title="overflow" src="https://codepen.io/xazy/embed/bGZOPBO?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/bGZOPBO">
  overflow</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Opacity

Opacity, ანუ რამდენად გამჭირვალე იყოს ელემენტი. თუ ელემენტს დავადებთ `opacity: 1`-ს, ის საერთოდ არ იქნება გამჭირვალე, ხოლო თუ დავუწერთ `opacity: 0.5`-ს, მაშინ ნახევრად გამჭირვალე იქნება და ელემენტის უკან ფონი გამოჩნდება ცოტათი. `0` მნიშვნელობის შემთხვევაში ელემენტი საერთოდ არ გამოჩნდება, მაგრამ ადგილს მაინც დაიკავებს.


<iframe height="300" style="width: 100%;" scrolling="no" title="border, box-shadow, radius, overflow" src="https://codepen.io/xazy/embed/JjzwVdL?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/JjzwVdL">
  border, box-shadow, radius, overflow</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>