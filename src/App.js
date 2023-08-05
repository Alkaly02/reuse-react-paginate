import './App.css';
import ReuseItems from './pagination/components/ReuseItems';
// import PaginatedItems from './pagination/PaginationItems';
// import PaginatedItems2 from './pagination/PaginationItems2';
import ReusePaginationItems from './pagination/reusePagination/ReusePaginationItems';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function App() {
  return (
    <div className="p-2">
      <h1>React Pagination</h1>
      {/* <PaginatedItems itemsPerPage={5} />
      <PaginatedItems2 itemsPerPage={5} /> */}

      <ReusePaginationItems
        resourceData={items}
        itemsPerPage={3}
      >
        <ReuseItems />
      </ReusePaginationItems>

    </div>
  );
}

export default App;
