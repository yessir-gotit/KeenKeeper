import Navbar from "@/components/Navbar"
import Banner from "@/components/Banner"
import Footer from "@/components/Footer"
import FriendsList from "@/components/FriendsGrid"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <FriendsList />
      <Footer />
    </div>
  );
}
