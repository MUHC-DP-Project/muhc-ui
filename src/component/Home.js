import '../css/Home.css'
import TableComponent from '../component/TableComponent'
import SearchComponent from '../component/SearchComponent'

function Home() {
    return (
        <div className="Home">
             <SearchComponent/> 
            <TableComponent />

        </div>
    );
}

export default Home;