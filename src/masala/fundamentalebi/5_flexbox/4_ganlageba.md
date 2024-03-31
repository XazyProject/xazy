# განლაგება

## შესავალი

თითქმის ყველაფერს, რასაც შევეხეთ ფლექსბოქსში, გამოვიყენეთ `flex: 1` ყველა ფლექს აითემზე, რომელიც ამ აითემებს ზრდის ან კუმშავს თანაბრად თავისუფალი სივრცის შესავსებად. ფლექსი ასევე გამოსადეგარია ამ აითემების განლაგებისთვის, რომლებსაც სპეციფიური ზომა არ აქვთ.

## გაკვეთილის მიმოხილვა

- ვისწავლით როგორ განვალაგოთ აითემები ფლექს კონტეინერის შიგნით ვერტიკალურად და ჰორიზონტალურად.

## განლაგება

შეხედეთ ამ მაგალითს.

<iframe height="300" style="width: 100%;" scrolling="no" title="flex-alignment example" src="https://codepen.io/xazy/embed/yLwMEOg?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/yLwMEOg">
  flex-alignment example</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

თქვენ ალბათ გამოიცნობთ რა მოხდება თუ დაადებთ `flex: 1`-ს `.item` კლასს. სცადეთ თქვენით და შემდეგ გავაგრძელოთ.

`flex: 1`-ის დამატება `.item`-ზე თითოეულ აითემს ჩასვავს ისე, რომ შეავსონ ცარიელი ადგილი, მაგრამ რა უნდა ვქნათ იმ შემთხვევაში, თუ გვინდა იგივე სიგანე შევუნარჩუნოთ და უბრალოდ გადავანაწილოთ კონტეინერის სხვადასხვა ადგილას? ამის გაკეთებას ახლავე ვისწავლით.

წაუშალეთ `flex: 1` სტილი `.item` კლასს და დაამატეთ `.container` კლასს `justify-content: space-between`. ამის გაკეთება ასეთ შედეგს მოგვცემს:

![space-between](https://raw.githubusercontent.com/XazyProject/masala/main/fundamentalebi/5_flexbox/flexbox_ganlageba-imgs/01.png)

### justify-content - ჰორიზონტალურად განლაგება

`justify-content` განალაგებს აითემებს **ჰორიზონტალურ ხაზზე**. მას აქვს რამდენიმე მნიშვნელობა, რომლის გამოყენებაც შეგიძლიათ.

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly 
}
```

`flex-start` მნიშვნელობა აითემებს კონტეინერის დასაწყისში განათავსებს.

![flex-start](https://raw.githubusercontent.com/XazyProject/masala/main/fundamentalebi/5_flexbox/flexbox_ganlageba-imgs/02.png)

`flex-end` მნიშვნელობა აითემებს კონტეინერის ბოლოში განათავსებს.

![flex-end](https://raw.githubusercontent.com/XazyProject/masala/main/fundamentalebi/5_flexbox/flexbox_ganlageba-imgs/03.png)

`center` მნიშვნელობა აითემებს კონტეინერის ცენტრში განათავსებს.

![center](https://raw.githubusercontent.com/XazyProject/masala/main/fundamentalebi/5_flexbox/flexbox_ganlageba-imgs/04.png)

`space-between` მნიშვნელობა აითემებს თანაბრად გაანაწილებს პირველი აითემი იქნება კონტეინერის დასაწყისში, ბოლო აითემი კონტეინერის ბოლოში.

![space-between](https://raw.githubusercontent.com/XazyProject/masala/main/fundamentalebi/5_flexbox/flexbox_ganlageba-imgs/05.png)

`space-around` მნიშვნელობა აითემებს კონტეინერის დასაწყისში და ბოლოში თანაბარ დაშორებას მისცემს კონტეინერის კიდესგან.

![space-around](https://raw.githubusercontent.com/XazyProject/masala/main/fundamentalebi/5_flexbox/flexbox_ganlageba-imgs/06.png)

`space-evenly` მნიშვნელობა აითემებს კონტეინერის ცენტრში თანაბრად გადაანაწილებს ისე, რომ დაშორება ნებისმიერ ორ აითემს შორის (ასევე დაშორება კონტეინერის კიდესთან) თანაბარი იქნება.

![space-evenly](https://raw.githubusercontent.com/XazyProject/masala/main/fundamentalebi/5_flexbox/flexbox_ganlageba-imgs/07.png)

### align-items - ვერტიკალური განლაგება

ჩვენ ვისწავლეთ ჰორიზონტალური განლაგება, ახლა გადავდეთ ვერტიკალურ განლაგებაზე. იმისათვის, რომ აითემები ვერტიკალურად განალაგოთ, უნდა გამოიყენოთ `align-items`. ახლა სცადეთ ამ ყუთების ცენტრში განლაგება `.container` კლასზე `align-items: center`-ის დადებით. მან ასეთი სახე უნდა მიიღოს:

![align-items](https://raw.githubusercontent.com/XazyProject/masala/main/fundamentalebi/5_flexbox/flexbox_ganlageba-imgs/08.png)

რადგან `justify-content` და `align-items` განკუთვნილია ჰორიზონტალური და ვერტიკალური განლაგებებისთვის კონტეინერში, მათი "საქციელი" შეიცვლება, როდესაც შევცვლით `flex-direction`-ს ამ ფლექს კონტეინერზე. მაგალითად თუ ჩვენ `flex-direction`-ს მივანიჭებთ `column` მნიშვნელობას, `justify-content` განალაგებს აითემებს ვერტიკალურად, ხოლო `align-items` ჰორიზონტალურად. დამწყებებისთვის სწორედ ესაა ყველაზე დამაბნეველი.

`align-items`-ს აქვს რამდენიმე მნიშვნელობა:

![align-items](https://raw.githubusercontent.com/XazyProject/masala/4cdb39094dbc785fb927fb2187384e22026c3a94/fundamentalebi/5_flexbox/flexbox_ganlageba-imgs/09.svg)

- flex-start: აითემები განლაგდებიან ვერტიკალური ხაზის დასაწყისში.
- flex-end:  აითემები განლაგდებიან ვერტიკალური ხაზის დასასრულში.
- center:  აითემები განლაგდებიან ვერტიკალური ხაზის ცენტრში.
- stretch: აითემები იწელებიან, რათა შეავსონ კონტეინერი.
- baseline: აითემები განლაგდებიან, სადაც მათი საბაზისო დონეა.

### Gap

ფლექსის ერთ-ერთი ყველაზე მნიშვნელოვანი ფუნქციაა `gap` სტილი. `gap`-ის დამატებით ფლექს კონტეინერზე, ჩვენ ვამატებთ სივრცეს(დაშორებას) ფლექს აითემებს შორის, თითქმის მსგავსია, როგორც მარჯინი, თითოეულ აითემს რომ დავამატოთ. ახლა დავადოთ `gap: 8px` და ნახეთ შედეგი:

<iframe height="300" style="width: 100%;" scrolling="no" title="flex-alignment example 2" src="https://codepen.io/xazy/embed/XWGMBEL?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/XWGMBEL">
  flex-alignment example 2</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



## დავალება

<div className="homework">

1. გადახედეთ [ამ ინტერაქტიულ ფლექსბოქსის მაგალითებს](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/), ეს მოიცავს ყველაფერს რისი ცოდნაც გსურთ.

2. გადადით [ჩვენს CSS დავალებების რეპოზიტორში](https://github.com/XazyProject/css-davalebebi) და შედით `flex` ფოლდერში. სანამ დავალებებს გააკეთებთ წაიკითხეთ თითოეულის README ფაილი. გააკეთეთ დავალებები შემდეგი თანმიმდევრობით:
    - 01-flex-center
    - 02-flex-header
    - 03-flex-header-2
    - 04-flex-information
    - 05-flex-modal
    - 06-flex-layout
    - 07-flex-layout-2

    თითოეულის ამოხსნა შეგიძლიათ იპოვოთ დავალების `amoxsna` ფოლდერში.

</div>

## დამატებითი რესურსები

- [Flexbox Froggy](https://flexboxfroggy.com/) არის თამაში, რომელიც ფლექსბოქსში სავარჯიშოდ გამოგადგებათ.

