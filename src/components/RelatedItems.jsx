import ItemList from './ItemList';
import { Row, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getItemsByCat } from '../resources/firebase';
import { useParams } from 'react-router-dom';

const RelatedItems = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  const isInRandomItems = (newId, randomItems) =>
    randomItems.find((element) => element.id === newId);

  useEffect(() => {
    getItemsByCat().then((items) => {
      const randomItems = [];
      const randomItem = () => items[Math.floor(Math.random() * items.length)];

      const related = () => {
        while (randomItems.length < 4) {
          const item = randomItem();
          if (item.id !== id && !isInRandomItems(item.id, randomItems)) {
            randomItems.push(item);
          }
        }
      };
      related();
      setProducts(randomItems);
    });
  }, [id]);

  return (
    <>
      <Container>
        <div>
          <h4 className="mt-4" id="titleSeparator">
            <div> También te puede interesar... </div>
            <div className="separatorSpan"></div>
          </h4>
        </div>
        <Row xs={1} md={2} lg={4} className="g-4 mt-1 mb-1">
          <ItemList className="justify-content-center" products={products} />
        </Row>
      </Container>
    </>
  );
};

export default RelatedItems;
