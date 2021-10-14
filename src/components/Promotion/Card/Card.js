import React from "react";
import "./Card.css";

const PromotionCard = ({ promotion }) => (
  <div className="promotion-card">
    <img
      src={promotion.imageUrl}
      alt={promotion.title}
      className="promotion-card__image"
    />

    <div className="promotion-card__info">
      <h1 className="promotion-card__title">{promotion.title}</h1>
      <span className="promotion-card__price">R$ {promotion.price}</span>
      <footer className="promotion-card__footer">
        {promotion.comments.length > 0 && (
          <div className="promotion-card__comments">
            "{promotion.comments[0].comment}"
          </div>
        )}
        <div className="promotion-card__coments-count">
          {promotion.comments.length}
          {promotion.comments.length > 1 ? " comentários" : " comentário"}
        </div>

        <a
          href={promotion.url}
          target="_blank"
          className="promotion-card__link"
          rel="noreferrer"
        >
          IR PARA O SITE
        </a>
      </footer>
    </div>
  </div>
);

export default PromotionCard;

{
  /* O Conditional rendering acima verifica se existe comentários*/
  /* promotion.comments.length = mostra a quantidade de itens do array 

     promotion.comments.length > 0 = se ele for maior do que zero, que dize que existe pelo menos um item no array

      <div>{promotion.comments.length} comentários</div> = vai retornar a quantidade de comentários
  */
}
