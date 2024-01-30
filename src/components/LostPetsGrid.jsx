import LostPetModal from "./LostPetModal";

/**
 * ,species,breed,color,address,description,image_url
 */

const lostPetsArray = [
  {
    description:
      "Lost Dog: Our beloved furry friend, Max, has gone missing! Max is a friendly and energetic Golden Retriever with a shiny golden coat. He went missing near Oak Street Park. If found, please contact us immediately. Reward offered!",
      imgUrl:"https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg",
    },
    
    {
        description:
        "Missing Cat Alert: Luna, our sweet gray tabby cat, has wandered off from home. Luna is a small cat with bright green eyes and a distinctive white patch on her chest. She was last seen around Willow Lane. Please help us bring Luna back home!",
        imgUrl:"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
    },
    
    {
        description:
        "Lost Parrot: Our colorful parrot, Mango, has flown away. Mango is a vibrant, tropical bird with a mix of red, blue, and yellow feathers. Last spotted in the backyard. If you see Mango, please call us. We miss our talkative feathered friend!",
        imgUrl:"https://cdn.pixabay.com/photo/2014/07/31/20/48/bird-406776_960_720.jpg",
    },
    
    {
        description:
        "Lost Rabbit: Thumper, our fluffy white rabbit, has hopped out of sight. Thumper is a small and friendly bunny with distinctive brown spots on his ears. He was last seen near the vegetable garden. Any information is appreciated!",
        imgUrl:"",
    },
    
    {
        description:
        "Missing Ferret: Bandit, our playful ferret, has escaped from his cage. Bandit has a sleek black coat with a white mask over his eyes. If you spot Bandit around the neighborhood, please let us know. We're worried about our mischievous friend!",
        imgUrl:"",
    },
    
    // Repeat similar patterns for different pets
    
    {
        description:
        "Lost Snake: Slyther, our friendly ball python, is on the loose. Slyther is a non-venomous snake with a beautiful pattern. If found, approach with caution and contact us immediately. We miss our slithering companion!",
        imgUrl:"",
    },
    
    {
      imgUrl:"",
      description:
      "Missing Turtle: Speedy, our pet turtle, has wandered off. Speedy is a small turtle with a distinctive shell pattern. Last seen near the pond area. Please keep an eye out for our slow but adventurous friend!",
    },
    
    {
      imgUrl:"",
      description:
      "Lost Guinea Pig: Whiskers, our fluffy guinea pig, is missing. Whiskers has a mix of brown and white fur and loves nibbling on veggies. If you find Whiskers, please bring our little guinea pig back home!",
    },
    
    {
      imgUrl:"",
      description:
      "Missing Hamster: Peanut, our tiny hamster, has escaped from his cage. Peanut is a small and quick hamster with a sandy fur coat. Check corners and small spaces. We hope to find Peanut safe and sound!",
    },
    
    {
      imgUrl:"",
      description:
      "Lost Bird: Kiwi, our colorful budgie, has flown away. Kiwi has vibrant green and yellow feathers. Last seen in the backyard aviary. If you see Kiwi, please help us bring our chirpy companion back!",
    },
    
    {
      imgUrl:"",
      description:
      "Missing Fish: Bubbles, our friendly goldfish, is nowhere to be found. Bubbles has a bright orange color and swims happily in his tank. If you spot Bubbles, please let us know. Even fish can go missing sometimes!",
    },
    
    {
        imgUrl:"",
        description:
      "Lost Iguana: Iggy, our adventurous iguana, has ventured out of his enclosure. Iggy is a green iguana with a long tail. If you see Iggy, approach gently and contact us. We miss our reptilian friend!",
  },
];

export default function LostPetsGrid() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 my-4">
        {lostPetsArray.map((item, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-xl m-4">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    document.getElementById("my_modal_" + index).showModal()
                  }
                >
                  See Description
                </button>
              </div>
            </div>
            <LostPetModal description={item.description} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
