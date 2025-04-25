import obj from "../category/Category.module.css"
import next from "../../assets/next.svg"
export default function Category({ category }) {
    return (
        <div className="container">
            <div className={obj.cards}>
                {
                    category.map(({ img, type }, index) => (
                        <div key={index} className={obj.card}>
                            <img className={obj.image} src={img} alt="" />
                            <div className={obj.title}>
                                <h2 className={obj.text}>{type}</h2>
                                <button className={obj.button}>
                                    shop <img src={next} alt="" />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
