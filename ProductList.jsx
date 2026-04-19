const ProductList = () => {
    const products = [
        // Indoor Plants
        {
            category: 'Indoor Plants',
            items: [
                {
                    id: 1,
                    name: 'Snake Plant',
                    description: 'A hardy indoor plant that is easy to care for and thrives on neglect.',
                    price: '$20.00',
                    thumbnail: 'url_to_snake_plant_thumbnail',
                },
                {
                    id: 2,
                    name: 'Pothos',
                    description: 'A beautiful trailing plant that purifies the air and adds a lush touch to any room.',
                    price: '$15.00',
                    thumbnail: 'url_to_pothos_thumbnail',
                },
                {
                    id: 3,
                    name: 'Peace Lily',
                    description: 'Known for its stunning white flowers, this plant is perfect for low light conditions.',
                    price: '$25.00',
                    thumbnail: 'url_to_peace_lily_thumbnail',
                },
                {
                    id: 4,
                    name: 'Spider Plant',
                    description: 'An adaptable houseplant with long, arching leaves that produce baby plants.',
                    price: '$18.00',
                    thumbnail: 'url_to_spider_plant_thumbnail',
                },
                {
                    id: 5,
                    name: 'ZZ Plant',
                    description: 'Very drought tolerant and does well in low light, making it an excellent houseplant choice.',
                    price: '$30.00',
                    thumbnail: 'url_to_zz_plant_thumbnail',
                },
                {
                    id: 6,
                    name: 'Rubber Plant',
                    description: 'A robust indoor tree with glossy leaves; it requires bright light to thrive.',
                    price: '$35.00',
                    thumbnail: 'url_to_rubber_plant_thumbnail',
                },
                {
                    id: 7,
                    name: 'Fiddle Leaf Fig',
                    description: 'A popular indoor plant known for its dramatic leaves and height.',
                    price: '$40.00',
                    thumbnail: 'url_to_fiddle_leaf_fig_thumbnail',
                }
            ]
        },
        // Succulents
        {
            category: 'Succulents',
            items: [
                {
                    id: 8,
                    name: 'Aloe Vera',
                    description: 'A succulent plant species of the genus Aloe, known for its medicinal properties.',
                    price: '$12.00',
                    thumbnail: 'url_to_aloe_vera_thumbnail',
                },
                {
                    id: 9,
                    name: 'Echeveria',
                    description: 'A genus of flowering plants in the Crassulaceae family known for their stunning rosettes.',
                    price: '$10.00',
                    thumbnail: 'url_to_echeveria_thumbnail',
                },
                {
                    id: 10,
                    name: 'Jade Plant',
                    description: 'An evergreen succulent that is often considered a good luck charm.',
                    price: '$15.00',
                    thumbnail: 'url_to_jade_plant_thumbnail',
                },
                {
                    id: 11,
                    name: 'Hens and Chicks',
                    description: 'A hardy succulent that forms rosettes and produces offsets.',
                    price: '$8.00',
                    thumbnail: 'url_to_hens_and_chicks_thumbnail',
                },
                {
                    id: 12,
                    name: 'Sedum',
                    description: 'A versatile succulent that thrives in various conditions and is low maintenance.',
                    price: '$9.00',
                    thumbnail: 'url_to_sedum_thumbnail',
                },
                {
                    id: 13,
                    name: 'Sempervivum',
                    description: 'Commonly known as houseleeks; it is known for its attractive rosettes.',
                    price: '$11.00',
                    thumbnail: 'url_to_sempervivum_thumbnail',
                },
                {
                    id: 14,
                    name: 'String of Pearls',
                    description: 'A unique succulent with bead-like leaves that extend from a long trailing stem.',
                    price: '$20.00',
                    thumbnail: 'url_to_string_of_pearls_thumbnail',
                }
            ]
        },
        // Flowering Plants
        {
            category: 'Flowering Plants',
            items: [
                {
                    id: 15,
                    name: 'Orchid',
                    description: 'Famed for their beautiful blooms and unique shape, orchids are popular houseplants.',
                    price: '$50.00',
                    thumbnail: 'url_to_orchid_thumbnail',
                },
                {
                    id: 16,
                    name: 'Begonia',
                    description: 'A popular ornamental plant valued for its varied leaf shapes and flowers.',
                    price: '$22.00',
                    thumbnail: 'url_to_begonia_thumbnail',
                },
                {
                    id: 17,
                    name: 'Geranium',
                    description: 'Known for cheerful flowers, geraniums are easy to grow both indoors and outdoors.',
                    price: '$15.00',
                    thumbnail: 'url_to_geranium_thumbnail',
                },
                {
                    id: 18,
                    name: 'Chrysanthemum',
                    description: 'Popular in many gardens, these flowers bloom in autumn and come in myriad colors.',
                    price: '$12.00',
                    thumbnail: 'url_to_chrysanthemum_thumbnail',
                },
                {
                    id: 19,
                    name: 'Hibiscus',
                    description: 'Known for stunning large flowers, they are a favorite in tropical climates.',
                    price: '$30.00',
                    thumbnail: 'url_to_hibiscus_thumbnail',
                },
                {
                    id: 20,
                    name: 'Lily',
                    description: 'A beautiful flowering plant that comes in many varieties and colors.',
                    price: '$25.00',
                    thumbnail: 'url_to_lily_thumbnail',
                },
                {
                    id: 21,
                    name: 'Tulip',
                    description: 'Symbolic of spring, tulips come in numerous colors and are loved worldwide.',
                    price: '$18.00',
                    thumbnail: 'url_to_tulip_thumbnail',
                }
            ]
        }
    ];

    return (
        <div>
            {products.map(category => (
                <div key={category.category}>
                    <h2>{category.category}</h2>
                    {category.items.map(product => (
                        <div key={product.id}>
                            <img src={product.thumbnail} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <button>Add to Cart</button>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ProductList;