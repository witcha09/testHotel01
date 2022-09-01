import {Carousel} from 'react-carousel-minimal';
import SimpleImageSlider  from "react-simple-image-slider";

const RoomData = [
  {
    id: 1,
    name: "Deluxe King",
    benefits: [
      { description: "Parking" },
      { description: "Welcome drink" },
      { description: "Wifi" },
      { description: "Free fitness center" },
    ],
  },
  {
    id: 2,
    name: "Deluxe Twin",
    benefits: [{ description: "Parking" }, { description: "Welcome drink" }],
  },
  {
    id: 3,
    name: "Suit Sea View",
    benefits: [
      { description: "Parking" },
      { description: "Welcome drink" },
      { description: "Wifi" },
      { description: "Free fitness center" },
    ],
  },
  {
    id: 4,
    name: "Suit Garden View",
    benefits: [
      { description: "Parking" },
      { description: "Welcome drink" },
      { description: "Wifi" },
      { description: "Free fitness center" },
    ],
  },
];

const RoomImages = [
  {
    id: 1,
    images: [
      {
        imageURL:
          "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      },
    ],
  },
  {
    id: 1,
    images: [
      {
        imageURL:
          "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      },
    ],
  },
  {
    id: 1,
    images: [
      {
        imageURL:
          "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      },
    ],
  },
  {
    id: 2,
    images: [
      {
        imageURL:
          "https://i.picsum.photos/id/674/200/300.jpg?hmac=kS3VQkm7AuZdYJGUABZGmnNj_3KtZ6Twgb5Qb9ITssY",
      },
    ],
  },
  {
    id: 2,
    images: [
      {
        imageURL:
          "https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk",
      },
    ],
  },
  { id: 2, images: [{ imageURL: "https://picsum.photos/id/1018/1000/600/" }] },
  { id: 3, images: [{ imageURL: "https://picsum.photos/id/1015/1000/600/" }] },
  { id: 3, images: [{ imageURL: "https://picsum.photos/id/1019/1000/600/" }] },
  {
    id: 3,
    images: [
      {
        imageURL:
          "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      },
    ],
  },
  {
    id: 4,
    images: [
      {
        imageURL:
          "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      },
    ],
  },
  {
    id: 4,
    images: [
      {
        imageURL:
          "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      },
    ],
  },
  {
    id: 4,
    images: [
      {
        imageURL:
          "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      },
    ],
  },
];

class RoomType {
  getData() {
    return RoomData;
  }

  getBenefits(keyID) {
    const RoomWithBenefits = RoomData.filter((value, index, array) => {
      return value.id === keyID;
    }).map((array) => {
      return array.benefits;
    });

    console.log(RoomWithBenefits);
    return RoomWithBenefits;
  }

  getRoomImagesURL(keyID) {
    const RoomImagesURL = RoomImages.filter((value, index, array) => {
        return value.id === keyID;
      }).map((array) => {
        return array.images;
      });
  
      console.log(RoomImagesURL);
      return RoomImagesURL;

  }

//-----function carousel-------------------------------
   getRoomImages() {
    const data = [
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
        caption: "San Francisco"
      },
      {
        image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
        caption: "Scotland"
      },
      {
        image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
        caption: "Darjeeling"
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
        caption: "San Francisco"
      },
      {
        image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
        caption: "Scotland"
      },
      {
        image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
        caption: "Darjeeling"
      },
      {
        image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
        caption: "San Francisco"
      },
      {
        image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
        caption: "Scotland"
      },
      {
        image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
        caption: "Darjeeling"
      }
    ];
  
    const captionStyle = {
      fontSize: '2em',
      fontWeight: 'bold',
    }
    const slideNumberStyle = {
      fontSize: '20px',
      fontWeight: 'bold',
    }
    return (
          <div style={{
            padding: "0 5px"
          }}>
            <Carousel
              data={data}
              time={2000}
              width="400px"
              height="200px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={false}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="none"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="50px"
              
            />
      </div>
    );
  
   }

   getRoomImagesType2() {
    const images = [
      {url: "https://cdn.stocksnap.io/img-thumbs/960w/PS7M4VMB9P.jpg"},
      {url: "https://cdn.stocksnap.io/img-thumbs/960w/SVSBXHN1OU.jpg"},
      {url: "https://cdn.stocksnap.io/img-thumbs/960w/KLSTPV1LBV.jpg"},
      {url: "https://cdn.stocksnap.io/img-thumbs/960w/N06ELOLAT9.jpg"},
      {url: "https://cdn.stocksnap.io/img-thumbs/960w/YN0MX9OUSY.jpg"},
      {url: "https://cdn.stocksnap.io/img-thumbs/960w/JVBWZNCQLW.jpg"},
      {url: "https://cdn.stocksnap.io/img-thumbs/960w/LN6MZNMBUR.jpg"}
    ];

    return (
      <div>
        <SimpleImageSlider
        width={400}
        height={200}
        images={images}
        showBullets={false}
        showNavs={true}
        onClick= {()=>{window.location ="/login"}}
      />
      </div>
    );
   }

//------------------------------------
}

export default new RoomType();
