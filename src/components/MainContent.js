import React from "react";
import '../styles/MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <h2 className="heading">/* my projects */</h2>
            <div className="projects">
                <div className="project-card">
                    <div className="project-image">
                        <img src="/images/cashbook.jpeg" alt="Project 1" />
                    </div>
                    <div className="project-info">
                        <h3 className="title">CashBook</h3>
                        <p className="description">CashBook is a personal finance app that lets you log and categorize income and expenses in real time. At the end of any period—daily, weekly, or monthly—you can instantly export a polished PDF report with totals, category breakdowns, and spending trends. Whether you’re budgeting, tax-prepping, or just curious about your cash flow, CashBook delivers clear, shareable insights in seconds.</p>
                        <p className="tech-stack">Tech Stack: Android Java With XML,Firebase</p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src="/images/uptrend.jpeg" alt="Project 2" />
                    </div>
                    <div className="project-info">
                        <h3 className="title">E-Commerce App</h3>
                        <p className="description">Up Trend is a fully-featured e-commerce app built in Java/XML, offering both customer and admin panels. Shoppers can browse categorized products, manage a cart, place secure orders, and track their purchase history, while admins get real-time dashboards to add/edit inventory, process orders, and view sales analytics. Its clean UI and robust backend make buying and managing an online store seamless and efficient.</p>
                        <p className="tech-stack">Tech Stack: Android Java With XML,Firebase</p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default MainContent;