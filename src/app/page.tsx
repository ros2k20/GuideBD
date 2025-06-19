import Link from 'next/link';
export default function Home() {

    return (
      <>
          <section className="hero-section">
                  <div className="hero-left">
                      <h1>Bangladesh</h1>
                      <h3>Info and tips for your city Bangladesh.</h3>
                      <p>
                          Bangladesh, a land of vibrant culture, natural beauty, and rich history,
                          welcomes travelers with its warm hospitality and diverse experiences. In
                          this travel guide, you will discover the countrys most important
                          attractions such as the Sundarbans the worlds largest mangrove forest
                          and the ancient city of Paharpur. Get useful tips on accommodation and
                          transportation, and find out how to explore the bustling streets of Dhaka
                          or relax on the serene beaches of Cox’s Bazar.
                      </p>
                  </div>

                  <div className="hero-right">
                      <div className="grid-box">

                              <div className="box">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src="/rangamati.jpg" alt=""/>
                                  <Link href="/details/chattogram">
                                  <div className="title-overlay">Chattogram</div>
                                  </Link>
                              </div>


                          <div className="box">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src="/paharpur.jpg" alt=" "/>
                              <Link href="/details/rajshahi">
                              <div className="title-overlay">Rajshahi</div>
                              </Link>
                          </div>


                          <div className="box">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src="/Nijhundip.jpg" alt=" "/>
                              <Link href="/details/mymensingh">
                              <div className="title-overlay">Mymensingh</div>
                              </Link>
                          </div>


                          <div className="box">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src="/national-martys.jpg" alt=" "/>
                              <Link href="/details/dhaka">
                              <div className="title-overlay">Dhaka</div>
                              </Link>
                          </div>


                          <div className="box">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src="/rangpur.jpg" alt=" "/>
                              <Link href="/details/rangpur">
                              <div className="title-overlay"> Rangpur</div>
                              </Link>
                          </div>


                          <div className="box">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src="/bagerhat.jpg" alt=" "/>
                              <Link href="/details/khulna">
                              <div className="title-overlay">Khulna</div>
                              </Link>
                          </div>

                          <div className="box">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src="/guthia.jpg" alt=" "/>
                              <Link href="/details/barishal">
                              <div className="title-overlay">Barishal</div>
                              </Link>
                          </div>

                          <div className="box">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src="/sylhet.jpg" alt=""/>
                              <Link href="/details/sylhet">
                              <div className="title-overlay">Sylhet</div>
                              </Link>
                          </div>

                      </div>
                  </div>
              </section>


          <section className="top-place-section">
              <div className="xl:px-25">
                  <h3 className="short-text">PLAN YOUR TRIP</h3>
                  <h1 className="title-text">Where to next?</h1>
              </div>
              <div className=" xl:px-26">
                  <button className="btn">
                      View All
                      <span className="arrow">→</span>
                  </button>
              </div>


              <div className="Places  xl:px-25">

                  <div className="place-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/next/Cox-s-Bazar.jpg" alt=" coxs bazar "/>
                      <div className="place-text">
                          <h3>Cox’s Bazar</h3>
                      </div>
                  </div>


                  <div className="place-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/next/sajekvalley.jpg" alt=" sajek valley " />
                      <div className="place-text">
                          <h3> Sajek Valley</h3>
                      </div>
                  </div>


                  <div className="place-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/next/bisnakandi.jpg" alt=" bisnakandi " />
                      <div className="place-text">
                          <h3> Bisnakandi </h3>
                      </div>
                  </div>


                  <div className="place-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/next/sixty%20dom.jpg" alt=" sixty dome mosque " />
                      <div className="place-text">
                          <h3> Sixty Dome Mosque</h3>
                      </div>
                  </div>


                  <div className="place-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/next/kuakata.jpg" alt=" kuakata " />
                      <div className="place-text">
                          <h3> Kuakata </h3>
                      </div>
                  </div>


                  <div className="place-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/next/lalbag%20fort.jpg" alt=" lalbagh fort " />
                      <div className="place-text">
                          <h3>Lalbagh Fort</h3>
                      </div>
                  </div>


                  <div className="place-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/next/saint%20martin.jpg" alt=" saint martin  " />
                      <div className="place-text">
                          <h3>Saint Martin</h3>
                      </div>
                  </div>


                  <div className="place-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/next/Ahsan%20Manzil.jpg" alt=" ahsan manzil " />
                      <div className="place-text">
                          <h3>Ahsan Manzil</h3>
                      </div>
                  </div>


                  <div className="place-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/next/bandorban.jpg" alt=" bandarban " />
                      <div className="place-text">
                          <h3>Bandarban</h3>
                      </div>
                  </div>


                  <div className="place-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/next/Sundarban.jpg" alt=" sundarban " />
                      <div className="place-text">
                          <h3> Sundarban</h3>
                      </div>
                  </div>

              </div>
          </section>


          <div className="division-title-section">
              <div>
                  <h1 className="second-title-text">Bangladesh Tour Guide</h1>
                  <h3 className="tips-text">Tips and information for your trip to Bangladesh</h3>
              </div>
          </div>



          <div className=" grid ">

              <div className="card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/rajshahi.png" alt=" rajshahi " />
                  <div className="division-name">
                      <h3>Rajshahi</h3>
                      <p>Rajshahi Division, in northwestern Bangladesh,
                          is known for silk, mangoes, and historical sites.
                          It features rich culture, agriculture, and
                          educational institutions across its serene districts.</p>
                      <button className="btns">
                          Read More
                          <span className="arrow">→</span>
                      </button>
                  </div>
              </div>

              <div className="card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/chattogram.png" alt=" chattogram " />
                  <div className="division-name">
                      <h3>Chattogram</h3>
                      <p>Chattogram Division, in southeastern Bangladesh,
                          is known for its major seaport, scenic hills,
                          and beaches. It’s a hub for trade, tourism, and diverse cultures.</p>
                      <button className="btns">
                          Read More
                          <span className="arrow">→</span>
                      </button>
                  </div>
              </div>

              <div className="card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/dhaka.png" alt=" dhaka " />
                  <div className="division-name">
                      <h3>Dhaka</h3>
                      <p>Dhaka Division, located in central Bangladesh,
                          is the nations political, economic, and cultural heart.
                          It includes Dhaka city, the capital of Bangladesh,
                          which is a major hub for commerce.
                      </p>

                      <button className="btns">
                          Read More
                          <span className="arrow">→</span>
                      </button>
                  </div>
              </div>

              <div className="card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/sylhet.png" alt=" sylhet " />
                  <div className="division-name">
                      <h3>Sylhet</h3>
                      <p>Sylhet Division, in northeastern Bangladesh,
                          is famed for its tea gardens, green hills,
                          and spiritual heritage. It’s a major source of
                          remittances from expatriates, especially in the UK.</p>

                      <button className="btns">
                          Read More
                          <span className="arrow">→</span>
                      </button>
                  </div>
              </div>

              <div className="card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/mymensingh.png" alt=" mymensingh " />
                  <div className="division-name">
                      <h3>Mymensingh</h3>
                      <p>Mymensingh Division, in north-central Bangladesh,
                          is known for agriculture, scenic rivers, and educational
                          institutions like Bangladesh Agricultural University.</p>

                      <button className="btns">
                          Read More
                          <span className="arrow">→</span>
                      </button>
                  </div>
              </div>

              <div className="card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/khulna.png" alt=" khulna " />
                  <div className="division-name">
                      <h3>Khulna</h3>
                      <p>Khulna Division, in southwestern Bangladesh,
                          is known for the Sundarbans mangrove forest,
                          agriculture, and heritage sites.
                          It’s a hub of biodiversity,and cultural richness.</p>

                      <button className="btns">
                          Read More
                          <span className="arrow">→</span>
                      </button>
                  </div>
              </div>

              <div className="card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/rangpur.png" alt=" rangpur " />
                  <div className="division-name">
                      <h3>Rangpur</h3>
                      <p>Rangpur Division, in northern Bangladesh,
                          is known for agriculture, especially rice and potatoes.
                          It features rural beauty, cultural heritage,
                          and districts rich in tradition and history.</p>

                      <button className="btns">
                          Read More
                          <span className="arrow">→</span>
                      </button>
                  </div>
              </div>

              <div className="card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/barishal.png" alt=" barishal " />
                  <div className="division-name">
                      <h3>Barishal</h3>
                      <p>Barishal Division, in southern Bangladesh,
                          is known for its rivers, floating guava markets,
                          and lush greenery. It offers rich agriculture,
                          and unique riverine culture.</p>

                      <button className="btns">
                          Read More
                          <span className="arrow">→</span>
                      </button>
                  </div>
              </div>
          </div>




      </>
  );
}
