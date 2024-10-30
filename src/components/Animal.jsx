import {data} from '../utils/constants.js';

function Animal({ selectedAnimal }) {
    let animal = data.find((item) => {
        return item.name === selectedAnimal;
    });

    if (!animal || !animal.image) {
        animal = data.find((item) => {
            return item.name === 'default';
        });
    }

    return <img src={animal.image} alt={animal.name} />;
}

export default Animal;