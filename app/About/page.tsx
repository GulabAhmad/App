import React from "react"
import Link  from "next/link"


export default function about() {
    return (
        <main>
    

<html lang="en">

<head/>
    
    <title>Explore Skill - Sagar Developer</title>
    <Link rel="stylesheet" href="style.css"/>
    <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <Link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"/>


<body>
    <section className="Sub-header">
        <nav>
            <a href="index.html" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </a>
            <div className="nav-links" id="navLinks">
                
                <i className="fa fa-times" ></i>
                <ul>
                <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/Course.html"}>Course</Link></li>
                    <li><Link href={"/Blog.html"}>Blog</Link></li>
                    <li><Link href={"/About.html"}>About</Link></li>
                    <li><Link href={"Contact.html"}>Contact</Link></li>
                </ul>
            </div>
            <i className="fa fa-bars"></i>
           
        </nav>
        <Link href={"/about"}><h1>About Us</h1></Link>
    </section>


    <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                <Link href={"#"} className="hero_btn btn">EXPLORE NOW</Link>
            </div>
            <div className="about-col">
                <img src="img/about.png" alt=""/>
            </div>
        </div>
    </section>

    
    <section className="footer">
        <hr/>
        <h4>About Us</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
            <br/> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae
            dolorem.
        </p>

        <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
        </div>
        <p>Made with <i className="fas fa-heart"></i> by <a href="#">Sagar Developer</a></p>
        <p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
    </section>
    

    <script src="script.js"></script>
</body>
</html>
</main>
    )
}

