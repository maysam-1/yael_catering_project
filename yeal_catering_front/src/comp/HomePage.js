import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const menuItems = [
    {
        name: "Labneh Balls",
        description: "Dried yogurt balls soaked in olive oil.",
        image: "https://i.pinimg.com/736x/38/1d/ae/381dae237f59b48d41a824b39aeaf634.jpg"
    },
    {
        name: "Hummus with Pine Nuts",
        description: "Creamy hummus topped with toasted pine nuts.",
        image: "https://suebeehomemaker.com/wp-content/uploads/2022/04/toasted-pine-nut-hummus-11.jpg"
    },
    {
        name: "Baba Ganoush",
        description: "Roasted eggplant dip with tahini and garlic.",
        image: "https://littlesunnykitchen.com/wp-content/uploads/2014/07/Baba-Ganoush-recipe-12.jpg"
    },
    {
        name: "Tabbouleh",
        description: "Fresh parsley salad with bulgur, tomatoes, and lemon.",
        image: "https://feelgoodfoodie.net/wp-content/uploads/2023/04/Lebanese-Tabbouleh-Salad-09.jpg"
    },
    {
        name: "Fattoush",
        description: "Mixed greens salad with crispy pita chips and sumac.",
        image: "https://www.fooddolls.com/wp-content/uploads/2023/08/Fattoush0413.jpg"
    },
    {
        name: "Druze Bread with Za'atar",
        description: "Traditional flatbread with za’atar spice mix.",
        image: "https://www.manusmenu.com/wp-content/uploads/2015/02/1-Zaatar-Manouche-3-1-of-1.jpg"
    },
    {
        name: "Mansaf",
        description: "Roasted green wheat with spiced chicken.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Mansaf%2C_the_traditional_dish_of_Jordan.jpg/640px-Mansaf%2C_the_traditional_dish_of_Jordan.jpg"
    },
    {
        name: "Druze Mujadara",
        description: "Lentils, rice, and caramelized onions.",
        image: "https://www.simplyleb.com/wp-content/uploads/Mujadara-Hamra-17.jpg"
    },
    {
        name: "Kibbeh Nayeh",
        description: "Raw minced lamb mixed with bulgur and spices.",
        image: "https://i.pinimg.com/736x/62/63/87/62638789d1003b89245f0a797e634a8c.jpg"
    },
    {
        name: "Knafeh",
        description: "Sweet cheese pastry soaked in orange blossom syrup.",
        image: "https://cleobuttera.com/wp-content/uploads/2018/05/cheese-pull-knafeh-720x720.jpg"
    },
    {
        name: "Qatayef",
        description: "Mini stuffed pancakes with nuts or cheese.",
        image: "https://littlesunnykitchen.com/wp-content/uploads/2014/07/Atayef-2.jpg"
    },
    {
        name: "Awama Dessert",
        description: "Deep-fried dough balls soaked in rose water syrup.",
        image: "https://falasteenifoodie.com/wp-content/uploads/2024/10/DSC09169-533x800.jpg"
    },
    {
        name: "Sahlab",
        description: "Hot milk pudding with cinnamon and nuts.",
        image: "https://littlesunnykitchen.com/wp-content/uploads/2013/12/Sahlab-12.jpg"
    },
    {
        name: "Arabic Coffee",
        description: "Strong coffee with cardamom.",
        image: "https://cdn.tasteatlas.com/images/ingredients/2048c26f3efd4626a85c357a76a1ecfe.jpg?w=600"
    }
];

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* Hero Section */}
            <div className="hero-section">
                <img src="/hero-banner.jpg" alt="Authentic Druze Catering" />
                {/* Login Button - Now on the Top Right */}
                <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
            </div>

            {/* Spacing after Hero Section */}
            <div style={{ marginBottom: "40px" }}></div>

            {/* Menu Section */}
            <h2 className="section-title">Our Menu</h2>
            <div className="menu-container">
                {menuItems.map((item, index) => (
                    <div key={index} className="menu-card">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
