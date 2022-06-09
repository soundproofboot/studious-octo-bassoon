import './Services.css';
import image from '../../assets/services-temp-image.jpg';

const servicesOffered = [
  {
    title: 'Service 1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam magnam officiis odit repellat cumque quod, possimus facere. Aliquid impedit iusto at dolores asperiores ratione laboriosam minima consequatur, neque eos amet.',
  },
  {
    title: 'Service 2',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam magnam officiis odit repellat cumque quod, possimus facere. Aliquid impedit iusto at dolores asperiores ratione laboriosam minima consequatur, neque eos amet.',
  },
  {
    title: 'Service 3',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam magnam officiis odit repellat cumque quod, possimus facere. Aliquid impedit iusto at dolores asperiores ratione laboriosam minima consequatur, neque eos amet.',
  },
  {
    title: 'Service 4',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam magnam officiis odit repellat cumque quod, possimus facere. Aliquid impedit iusto at dolores asperiores ratione laboriosam minima consequatur, neque eos amet.',
  },
  {
    title: 'Service 5',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam magnam officiis odit repellat cumque quod, possimus facere. Aliquid impedit iusto at dolores asperiores ratione laboriosam minima consequatur, neque eos amet.',
  },
];

const Services = () => {
  return (
    <section id="services-page">
      <h2 className='heading'>Services</h2>
      <p className="text-container">
        Maybe you include an overview here or maybe this page is just the cards
        with the areas you focus on? I don't really know what's appropriate
      </p>
      <div className="service-container left">
        <article className="service-overlay">
          <h3 className='heading' >{servicesOffered[0].title}</h3>
          <p>{servicesOffered[0].description}</p>
        </article>
      </div>
      <div className="service-container right">
        <article className="service-overlay">
          <h3 className='heading' >{servicesOffered[0].title}</h3>
          <p>{servicesOffered[0].description}</p>
        </article>
      </div>
      <div className="service-container">
        <article className="service-overlay">
          <h3 className='heading' >{servicesOffered[0].title}</h3>
          <p>{servicesOffered[0].description}</p>
        </article>
      </div>
      <div className="service-container">
        <article className="service-overlay">
          <h3 className='heading' >{servicesOffered[0].title}</h3>
          <p>{servicesOffered[0].description}</p>
        </article>
      </div>
      <div className="service-container">
        <article className="service-overlay">
          <h3 className='heading' >{servicesOffered[0].title}</h3>
          <p>{servicesOffered[0].description}</p>
        </article>
      </div>
      <div className="service-container">
        <article className="service-overlay">
          <h3 className='heading' >{servicesOffered[0].title}</h3>
          <p>{servicesOffered[0].description}</p>
        </article>
      </div>
      <div className="service-container">
        <article className="service-overlay">
          <h3 className='heading' >{servicesOffered[0].title}</h3>
          <p>{servicesOffered[0].description}</p>
        </article>
      </div>
      <div className="service-container">
        <article className="service-overlay">
          <h3 className='heading' >{servicesOffered[0].title}</h3>
          <p>{servicesOffered[0].description}</p>
        </article>
      </div>
    </section>
  );
};

export default Services;
