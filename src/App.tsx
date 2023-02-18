import {Slider} from "./slider"
import {Icon} from "./components/ui/icon"

import Logo from "/public/logo.svg"
import Phone from "/public/phone.svg"

import c0 from "/images/c0.jpg"
import c1 from "/images/c1.jpg"
import c2 from "/images/c2.jpg"
import c3 from "/images/c3.jpg"

import './App.css'

function App() {

    return (
        <div className="App">
            <nav role="navigation">
                <div className="nav__wrapper">
                    <Icon className="logo-icon" Svg={Logo}/>
                    <Icon className="phone-icon" Svg={Phone}/>
                    <span className="phone">+7 (495) 495-49-54</span>
                </div>
            </nav>
            <main>
                <section>
                    <h2>ut aliquip ex ea commodo consequat</h2>
                    <article>
                        <div className="image__wrapper">
                            <img src={c0} alt=""/>
                        </div>
                        <div className="paragraph">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                            <p>
                                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum
                            </p>
                        </div>
                    </article>
                    <article>
                        <div className="image__wrapper">
                            <img src={c1} alt=""/>
                        </div>
                        <div className="paragraph">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                            <p>
                                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum
                            </p>
                        </div>
                    </article>
                </section>

                <section>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <Slider/>
                </section>

                <section>
                    <h2>ut aliquip ex ea commodo consequat</h2>
                    <article>
                        <div className="image__wrapper">
                            <img src={c2} alt=""/>
                        </div>
                        <div className="paragraph">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                            <p>
                                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum
                            </p>
                        </div>
                    </article>
                    <article>
                        <div className="image__wrapper">
                            <img src={c3} alt=""/>
                        </div>
                        <div className="paragraph">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                            <p>
                                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum
                            </p>
                        </div>
                    </article>
                </section>
            </main>
            <footer>
                <span>© TEST, 1022–2022</span>
            </footer>
        </div>
    )
}

export default App
