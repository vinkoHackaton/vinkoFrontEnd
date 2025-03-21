import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./BrandingPage.css"
import { getAllCompanions } from "../../services/companionService";
import UserCard from "../../components/UserCard"
const BrandingPage = () => {

    const [companions, setCompanions] = useState([])

    useEffect(() =>  {
        const fetchCompanions = async () => {
            const data = await getAllCompanions();
            setCompanions(data)
        }
        fetchCompanions();
    }, [])

    return (
        <div className="container-cards">
            <Header />
            <div className="container-wrap">
                {companions.map((c) => {
                    const {description, name, id, photoUrl} = c;
                    return <UserCard key={id} id={id} imageUrl={photoUrl} description={description} name={name}/>
                })}
            </div>
            <Footer />
        </div>
    )
}

export default BrandingPage;