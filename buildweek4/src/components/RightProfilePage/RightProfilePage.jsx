import "./RightProfilePage.css";
import FirstCard from "./cardsprofilepage/FirstCard";
import UserListCard from "./cardsprofilepage/UserListCard";
import LastCard from "./cardsprofilepage/LastCard";


const RightProfilePage = () => {
  const viewedProfiles = [
    {
      id: 1,
      name: "Avvocato nel settore Servizi IT e ...",
      subtitle: "Visible solo a te",
      avatar: "https://i.pravatar.cc/80?img=12",
      actionLabel: "Visualizza"
    },
    {
      id: 2,
      name: "Qualcuno presso IB.CPA",
      subtitle: "Visible solo a te",
      avatar: "https://i.pravatar.cc/80?img=22",
      actionLabel: "Visualizza"
    }
  ];

  const peopleYouMayKnow = [
    {
      id: 1,
      name: "Martina Abbate",
      subtitle: "Specialista Marketing e Trade Marketing",
      avatar: "https://i.pravatar.cc/80?img=32",
      actionLabel: "Segui"
    },
    {
      id: 2,
      name: "Ivan Gerundo",
      subtitle: "Finance & Operations Manager",
      avatar: "https://i.pravatar.cc/80?img=41",
      actionLabel: "Messaggio"
    },
    {
      id: 3,
      name: "Luca Tuori",
      subtitle: "Titolare di un divertente e bizzarro Hotel nel ...",
      avatar: "https://i.pravatar.cc/80?img=56",
      actionLabel: "Segui"
    },
    {
      id: 4,
      name: "Edoardo Cauda",
      subtitle: "In riconversione professionale",
      avatar: "https://i.pravatar.cc/80?img=61",
      actionLabel: "Messaggio"
    },
    {
      id: 5,
      name: "Luca B.",
      subtitle: "Chef at Do&Co International",
      avatar: "https://i.pravatar.cc/80?img=67",
      actionLabel: "Messaggio"
    },
    {
      id: 6,
      name: "Giulia M.",
      subtitle: "HR Specialist",
      avatar: "https://i.pravatar.cc/80?img=15",
      actionLabel: "Segui"
    }
  ];

  const pagesForYou = [
    {
      id: 1,
      name: "Poste Italiane",
      subtitle: "Trasporti, logistica, supply chain e stoccaggio",
      avatar: "https://play-lh.googleusercontent.com/rq8SKn6MprM5Cg008dFPPYuwdwcM1-H45Jaqe6Of-4v3Zr8dX-eCyfqGDiaTR3vIVQ",
      actionLabel: "Segui",
      isSquare: true
    },
    {
      id: 2,
      name: "INPS_official",
      subtitle: "Pubblica amministrazione",
      avatar: "https://img.utdstc.com/icon/579/538/57953810b5ceda062d6bc995e065ab0284114a67bad36018886809067a4e0f21:200",
      actionLabel: "Segui",
      isSquare: true
    }
  ];
  return (
    <div className="rp-right">
      <FirstCard/>
      <UserListCard
        title="Altri profili consultati"
        subtitle="Visible solo a te"
        items={viewedProfiles}
        showMoreLabel="Mostra tutto"/>
      <UserListCard
        title="Persone che potresti conoscere"
        subtitle="Del tuo settore"
        items={peopleYouMayKnow}
        showMoreLabel="Mostra tutto"/>
      <UserListCard
        title="Potrebbero interessarti"
        subtitle="Pagine per te"
        items={pagesForYou}
        showMoreLabel="Mostra tutto"/>
      <LastCard
        imageUrl="https://via.placeholder.com/600x600?text=Ad"
        alt="advert"/>
    </div>
  );
};

export default RightProfilePage;

