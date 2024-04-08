const Contribute = () => {
  return (
    <div className="contribute-container">
      <h1>როგორ შევიტანოთ წვლილი</h1>
      <p>
        XAZY არის open-source პროექტი, რაც ნიშნავს, რომ ნებისმიერ მსურველს
        შეუძლია წვლილის შეტანა, ვებ-საიტის გაუმჯობესება, მასალაში ნაპოვნი
        შეცდომების შესწორება, მასალის გადაკეთება, განვრცობა, ახალი გაკვეთილის
        დამატება და ა.შ. ამით შევძლებთ შევქმნათ სრულფასოვანი და ყვევლასთვის
        ხელმისაწვდომი პროგრამირების სასწავლო სივრცე ქართულ ენაზე.
      </p>
      <a
        className="first-link"
        target="_blank"
        href="https://github.com/XazyProject/xazy/blob/main/.github/CONTRIBUTING.md"
        rel="noreferrer"
      >
        გაკვეთილი - როგორ შევიტანოთ წვლილი.
      </a>
      <h2>წვლილის შეტანა შეგიძლიათ ორი გზით:</h2>
      <div className="contribute-cards-holder">
        <div className="contribute-card">
          <h3>წვლილის შეტანა მასალაზე</h3>
          <p>
            მასალა შეიცავს გაკვეთილებს და პროექტებს ამ ვებ-საიტზე. ის
            ყოველდღიურად იზრდება და ითარგმნება საუკეთესო რესურსებიდან. ამ
            რეპოზიტორიაში იპოვით მთლიან მასალას, რომელზეც შეგიძლიათ კონტრიბუცია.
          </p>
          <a
            href="https://github.com/XazyProject/masala"
            target="_blank"
            rel="noreferrer"
          >
            ნახეთ GitHub
          </a>
        </div>
        <div className="contribute-card">
          <h3>წვლილის შეტანა მთავარ საიტზე</h3>
          <p>
            საიტი, რომელზეც ახლა იმყოფებით, არის რეაქტის აპლიკაცია. საიტი არ
            არის დასრულებული და გეგმაშია ბევრი ფუნქციის დამატება, რომლებიც
            მომხმარებელს უკეთეს გამოცდილებას მიანიჭებს. რადგან ეს open-source
            პროექტია, ყველას შეუძლია ნახოს რა ხარვეზის აღმოფხვრა სჭირდება საიტს
            და რა feature-ს დამატება იგეგმება, რაშიც შესაძლებელია წვლილის
            შეტანა.
          </p>
          <a
            href="https://github.com/XazyProject/xazy"
            target="_blank"
            rel="noreferrer"
          >
            ნახეთ GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contribute;