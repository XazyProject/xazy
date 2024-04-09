# რესპონსული სურათები

## შესავალი

სურათბს სჭირდებათ სპეციალური მოვლა საიტებზე. ამ გაკვეთილში ისწავლით პრობლემებს, რომლებსაც რესპონსულ სურათებთან მუშაობისას წააწყდებით და ისწავლით რა გზები გაქვთ მათ მოსაგვარებლად.

## გაკვეთილის მიმოხილვა

- ისწავლით როგორ შევუცვალოთ ზომები სწორად სურათებს CSS-ს გამოყენების დროს.
- ისწავლით როგორ მოვარგოთ სურათი ეკრანის ყველა ზომას.

## საფუძვლები

ყველაზე მარტივი პრობლემა, რომელსაც რესპონსულ სურათებთან მუშაობისას შეხვდებით, არის შეფარდება ან სიგანესა და სიმაღლეს შორის ურთიერთობა. თუ შეკუმშავთ სიგანეში სურათს პატარა ეკრანებზე და არ მოახდენთ სიმაღლის მანიპულირებას, სურათი დაჭყანული გამოვა.

ამის გამოსავალი ძალიან ადვილია და უკვე ვახსენეთ წინა გაკვეთილში: არ განვსაზღვროთ სიმაღლე და სიგანე. თუჯ სიმაღლეს აქვს მოქნილი სიგანე და სიმაღლეს უწერია `auto`, ის შეინარჩუნებს სწორ შეფარდებას.

## background-size, background-position და object-fit

რა უნდა ქნათ, თუ არ გსურთ სიმაღლის შემცირება სიმაღლეში და სიგანეში? `background-size` და `object-fit` არის ორი სტილი, რომლებიც სურათებს უფრო მოქნილს ხდის და შეფარდებებს უმკლავდება.

`background-position` და `background-size` არის სტილები, რომლებიც მუშაობენ ელემენტებზე, რომლებსაც აქვთ ფონის სურათი და არ მუშაობენ ჩვეულებრივ `img` ტაგებზე. თქვენ ნახავთ მაგალითებს წასაკითხ დავალებაში, მაგრამ შეგიძლიათ ფონის სურათების ბევრნაირი კონტროლი. მაგალითად, `background-position: center` სურათს ყოველთვის კონტეინერის ცენტრში მოაქცევს, მიუხედავად იმისა, კონტეინერი თუ მთლიანი ფოტოს ჩასატევად პატარა იქნება. `background-size: cover` ისე მოაქცევს სურათს, რომ მთლიანად შეავსოს კონტეინერი და მოაჭრას ძალიან ცოტა, შეძლებისგვარად.

ამ მაგალითს კარგად დააკვირდით და იმუშავეთ:

<iframe height="300" style="width: 100%;" scrolling="no" title="background | CSS Responsiveness" src="https://codepen.io/xazy/embed/yLrKWqd?default-tab=html%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/yLrKWqd">
  background | CSS Responsiveness</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

`object-fit` მუშაობს მსგავსად, მაგრამ განკუთვნილი `img` თეგებისთვის (ზედა მაგალითი `background-image`-სთვის იყო). `object-fit`-ის გამოყენებით ვუთითებთ სიმაღლეს და სიგანეს სურათს და შემდეგ ვეუბნებით სურათს, როგორ ჩაეტიოს ამ საზღვრებში. ჩვეულებრივ `object-fit`-ის მნიშვნელობაა `fill`, რომელიც ჭიმავს სურათს ამ ზომებზე, მაგრამ, როგორც `background-size`-ს შეგვიძლია მიუთითოთ `cover` ან `contain` მნიშვნელობები.

ამ მაგალითში `object-fit` ადევს სურათს. გახსენით CodePen-ზე ეს მაგალითი და შეცვალეთ ბრაუზერის ზომები, რათა გაიგოთ როგორ რეაგირებს ფოტო.

<iframe height="300" style="width: 100%;" scrolling="no" title="object-fit | CSS Responsiveness" src="https://codepen.io/xazy/embed/xxeWNyO?default-tab=html%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/xxeWNyO">
  object-fit | CSS Responsiveness</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## უფრო მეტი კონტროლი!

ასევე შესაძლებელია გამოიყენოთ განსხვავებული ფოტოები, განსხვავებული ეკრანის ზომებისთვის. ეს უფრო მეტ კონტროლს გვაძლევს და ვიცით, ზუსტად როგორ გამოიყურება ფოტო განსხვავებულ რეზოლუციებზე. მაგალითად, `object-fit`-ის გამოყენების ნაცვლად, რათა შეინარჩუნოთ სურათი, თქვენ შეგიძლიათ გამოიყენოთ მოჭრილი ვერსიები პატარა ეკრანებზე. ამის მისაღწევად ორი გზა არსებობს, მაგრამ ყველაზე მოქნილია `<picture>` თეგის გამოყენება, რომლის გამოყენებასაც დავალებაში ისწავლით.

## დავალება

<div className="homework">

1. გადადით [background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size), [background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) და [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)-ის გვერდებზე და ნახეთ მაგალითები.
2. MDN-ს [რესპონსული სურათები](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) არის შესავალი რესპონსულ სურათებზე HTML-ში.
3. CSS-Tricks-ის [გაიდი რესპონსულ სურათებზე HTML-ში](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/) არის ძალიან კარგი არტიკლი, რომელიც სიღრმეებში ჩადის.

</div>

## დამატებითი რესურსები

- [რესპონსული სურათები 101](https://cloudfour.com/thinks/responsive-images-101-definitions/) არის კარგი არტიკლების სერია, თუ დამატებითი რესურსი გჭირდებათ.