import style from "./Branch.module.scss";
import branch from "../imgs/Branch.png";
import branches from "../mock/branches";
import { useParams } from "react-router-dom";

export function Branch() {
  const { id } = useParams();

  const branchData = branches.find((v) => v.id == id);
  // console.log(branchData);
  // console.log(branches);

  return (
    <div className={style.branch}>
      <div className={style.branch__container}>
        <div className={style.branch__title}>
          <p className={style.branch__name}>Зузу пицца Magic city</p>
        </div>
        <div className={style.branch__info}>
          <p className={style.branch__info1}>
            Название кафе «Zuzu» переводится с грузинского как «комната для
            приёмов». В интерьере заведения королевская пышность сочетается с
            уютом гостиной: на полу лежат домотканые орнаментальные ковры, зал
            украшает мебель из антикварного магазина, а серванты заполнены
            милыми безделушками.
          </p>
          <p className={style.branch__info2}>
            Еду здесь готовят по-домашнему, точно в тбилисском сахли. Посетители
            рекомендуют брать «бадриджаны бебия», то есть «баклажаны по
            бабушкиному рецепту» и мацони. Говорят, этот кисломолочный продукт
            здесь — один из лучших в городе.
          </p>
        </div>
        <img src={branch} alt="branch" />
        <div className={style.branch__location}>
          <p>
            Адрес: <div>Magic City,ул. Бабура, 174, Ташкент, Узбекистан</div>
          </p>
          <p>
            Часы работы: <div>10:00-03:00</div>
          </p>
          <p>
            Номер телефона: <div>+998 71 200 77 77</div>
          </p>
        </div>
      </div>
    </div>
  );
}
