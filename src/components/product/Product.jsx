import obj from "../product/Product.module.css"
import Button from "../button/Button"

export default function Product({ arr }) {
    return (
        <section>
            <div className={obj.container}>
                {
                    arr.map(({ img, title, desc, istrue }, i) => (
                        <div key={i} className={obj.card}>
                            <img src={img} alt="" />
                            <div>
                                <span className={obj.span}>{istrue}</span>
                                <h1 className={obj.heading}>{title}</h1>
                                <p className={obj.text}>
                                    {desc}
                                </p>
                                <Button />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
