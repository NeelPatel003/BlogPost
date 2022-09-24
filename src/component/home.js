import { handlePostLists } from '../redux/actions';
import BlogList from './BlogList';
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(handlePostLists());
    }, []);

    const _GET_POST_LISTS = useSelector((e) => e?.post);

    console.log("_GET_POST_LISTS",_GET_POST_LISTS)
    return ( 
        <div className="home">
          
            {_GET_POST_LISTS?.loading && <div>Loading...</div>}
            <BlogList blogs={_GET_POST_LISTS?.getPost} title="All Blogs"/>
        </div>
     );
}

export default Home;