import obj from "../product/Product.module.css"
import Button from "../button/Button"

export default function Product({ arr }) {
    return (
        <section>
            <div className={obj.container}>
                {
                    arr.map(({ img, tablet, mobile, title, desc, istrue }, i) => (
                        <div key={i} className={obj.card}>
                            <picture>
                                <source srcSet={mobile} media="(max-width:576px)" />
                                <source srcSet={tablet} media="(max-width:768px)" />
                                <img className={obj.responsive_img} src={img} alt="" />
                            </picture>
                            <div className={obj.title}>
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
