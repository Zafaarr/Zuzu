import "./Contact_module.scss";

export function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__title">
          <p>Контакты</p>
        </div>
        <div className="contact__center">
          <p>
            Единный call-центр: <span>+998 71 200 77 77</span>
          </p>
        </div>
        <div className="contact__bot">
          Вы можете написать нам <a href="https://t.me/zuzupizzabot">@ZuzuPizzaSupport_bot</a> также вы можете звонить
          по номеру +998712005400.
        </div>
      </div>
    </div>
  );
}
