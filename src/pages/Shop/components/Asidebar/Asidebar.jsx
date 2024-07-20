import { keepPreviousData, useQuery } from "@tanstack/react-query"
import categoryApi from "../../../../apis/Category.api"

export default function Asidebar() {

    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: () => categoryApi.getAllCategories(),
        placeholderData: keepPreviousData
    })
    console.log(categories);

    return (
        <div className="col-lg-3">
            <div className="shop__sidebar">
                <div className="shop__sidebar__search">
                    <form action="#">
                        <input type="text" placeholder="Search..." />
                        <button type="submit"><span className="icon_search" /></button>
                    </form>
                </div>
                <div className="shop__sidebar__accordion">
                    <div className="accordion" id="accordionExample">
                        <div className="card">
                            <div className="card-heading">
                                <a data-toggle="collapse" data-target="#collapseOne">Danh mục</a>
                            </div>
                            <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                <div className="card-body">
                                    <div className="">
                                        <ul className="nice-scroll" tabIndex={1} style={{ overflowY: 'hidden', outline: 'none' ,'listStyle':'none'}}>
                                            {categories?.data?.data.map((category)=>(
                                                <li key={category.id}>
                                                    <p>{category.name}</p>
                                                </li>
                                            ))}
                                         

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="card">
                        <div className="card-heading">
                            <a data-toggle="collapse" data-target="#collapseTwo">Thương hiệu</a>
                        </div>
                        <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
                            <div className="card-body">
                                <div className="shop__sidebar__brand">
                                    <ul>
                                      <p>Men (20)</p>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                        <div className="card">
                            <div className="card-heading">
                                <a data-toggle="collapse" data-target="#collapseThree">Filter Price</a>
                            </div>
                            <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                                <div className="card-body">
                                    <div className="shop__sidebar__price">
                                        <ul>
                                            <li><a href="#">$0.00 - $50.00</a></li>
                                            <li><a href="#">$50.00 - $100.00</a></li>
                                            <li><a href="#">$100.00 - $150.00</a></li>
                                            <li><a href="#">$150.00 - $200.00</a></li>
                                            <li><a href="#">$200.00 - $250.00</a></li>
                                            <li><a href="#">250.00+</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-heading">
                                <a data-toggle="collapse" data-target="#collapseFour">Size</a>
                            </div>
                            <div id="collapseFour" className="collapse show" data-parent="#accordionExample">
                                <div className="card-body">
                                    <div className="shop__sidebar__size">
                                        <label htmlFor="xs">xs
                                            <input type="radio" id="xs" />
                                        </label>
                                        <label htmlFor="sm">s
                                            <input type="radio" id="sm" />
                                        </label>
                                        <label htmlFor="md">m
                                            <input type="radio" id="md" />
                                        </label>
                                        <label htmlFor="xl">xl
                                            <input type="radio" id="xl" />
                                        </label>
                                        <label htmlFor="2xl">2xl
                                            <input type="radio" id="2xl" />
                                        </label>
                                        <label htmlFor="xxl">xxl
                                            <input type="radio" id="xxl" />
                                        </label>
                                        <label htmlFor="3xl">3xl
                                            <input type="radio" id="3xl" />
                                        </label>
                                        <label htmlFor="4xl">4xl
                                            <input type="radio" id="4xl" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-heading">
                                <a data-toggle="collapse" data-target="#collapseFive">Colors</a>
                            </div>
                            <div id="collapseFive" className="collapse show" data-parent="#accordionExample">
                                <div className="card-body">
                                    <div className="shop__sidebar__color">
                                        <label className="c-1" htmlFor="sp-1">
                                            <input type="radio" id="sp-1" />
                                        </label>
                                        <label className="c-2" htmlFor="sp-2">
                                            <input type="radio" id="sp-2" />
                                        </label>
                                        <label className="c-3" htmlFor="sp-3">
                                            <input type="radio" id="sp-3" />
                                        </label>
                                        <label className="c-4" htmlFor="sp-4">
                                            <input type="radio" id="sp-4" />
                                        </label>
                                        <label className="c-5" htmlFor="sp-5">
                                            <input type="radio" id="sp-5" />
                                        </label>
                                        <label className="c-6" htmlFor="sp-6">
                                            <input type="radio" id="sp-6" />
                                        </label>
                                        <label className="c-7" htmlFor="sp-7">
                                            <input type="radio" id="sp-7" />
                                        </label>
                                        <label className="c-8" htmlFor="sp-8">
                                            <input type="radio" id="sp-8" />
                                        </label>
                                        <label className="c-9" htmlFor="sp-9">
                                            <input type="radio" id="sp-9" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-heading">
                                <a data-toggle="collapse" data-target="#collapseSix">Tags</a>
                            </div>
                            <div id="collapseSix" className="collapse show" data-parent="#accordionExample">
                                <div className="card-body">
                                    <div className="shop__sidebar__tags">
                                        <a href="#">Product</a>
                                        <a href="#">Bags</a>
                                        <a href="#">Shoes</a>
                                        <a href="#">Fashio</a>
                                        <a href="#">Clothing</a>
                                        <a href="#">Hats</a>
                                        <a href="#">Accessories</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 