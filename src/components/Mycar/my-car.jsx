import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from "next/link";

const MyCar = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [generations, setGenerations] = useState([]);
  const [engines, setEngines] = useState([]);
  const [ecus, setEcUs] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedGeneration, setSelectedGeneration] = useState(null);
  const [selectedEngine, setSelectedEngine] = useState(null);
  const [selectedEcu, setSelectedEcu] = useState(null);

  // Track loading state for fetching
  const [isLoading, setIsLoading] = useState(false);

  // Fetch categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://127.0.0.1:8000/api/vehicle/categories');
        const sortedCategories = response.data.sort((a, b) =>
          a.category_name.localeCompare(b.category_name)
        );
        setCategories(sortedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Fetch brands when selected category changes
  useEffect(() => {
    const fetchBrands = async () => {
      if (selectedCategory !== null) {
        try {
          setIsLoading(true);
          const response = await axios.get('http://127.0.0.1:8000/api/vehicles/names', {
            params: { category_id: selectedCategory },
          });
          const sortedBrands = response.data.sort((a, b) =>
            a.brand_name.localeCompare(b.brand_name)
          );
          setBrands(sortedBrands);
        } catch (error) {
          console.error('Error fetching brands:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setBrands([]); // Clear brands if no category selected
      }
    };

    fetchBrands();
  }, [selectedCategory]);

  // Fetch models when selected brand and category change
  useEffect(() => {
    const fetchModels = async () => {
      if (selectedCategory && selectedBrand) {
        try {
          setIsLoading(true);
          const response = await axios.get('http://127.0.0.1:8000/api/vehicles/models', {
            params: { brand_id: selectedBrand, category_id: selectedCategory },
          });
          const sortedModels = response.data.sort((a, b) =>
            a.model_name.localeCompare(b.model_name)
          );
          setModels(sortedModels);
        } catch (error) {
          console.error('Error fetching models:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setModels([]); // Clear models if no category or brand selected
      }
    };

    fetchModels();
  }, [selectedBrand, selectedCategory]);

  // Fetch generations when selected model changes
  useEffect(() => {
    const fetchGenerations = async () => {
      if (selectedModel) {
        try {
          setIsLoading(true);
          const response = await axios.get('http://127.0.0.1:8000/api/vehicles/generations', {
            params: { model_id: selectedModel },
          });
          const sortedGenerations = response.data.sort((a, b) =>
            a.generation_name.localeCompare(b.generation_name)
          );
          setGenerations(sortedGenerations);
        } catch (error) {
          console.error('Error fetching generations:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setGenerations([]); // Clear generations if no model selected
      }
    };

    fetchGenerations();
  }, [selectedModel]);

  // Fetch engines when selected generation changes
  useEffect(() => {
    const fetchEngines = async () => {
      if (selectedGeneration) {
        try {
          setIsLoading(true);
          const response = await axios.get('http://127.0.0.1:8000/api/vehicles/engines', {
            params: {
              generation_id: selectedGeneration,
              model_id: selectedModel,
              brand_id: selectedBrand,
              category_id: selectedCategory,
            },
          });
          const sortedEngines = response.data.sort((a, b) =>
            a.engine_name.localeCompare(b.engine_name)
          );
          setEngines(sortedEngines);
        } catch (error) {
          console.error('Error fetching engines:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setEngines([]); // Clear engines if no generation selected
      }
    };

    fetchEngines();
  }, [selectedGeneration, selectedModel, selectedBrand, selectedCategory]);

  // Fetch ECUs when selected engine changes
  useEffect(() => {
    const fetchEcUs = async () => {
      if (selectedEngine) {
        try {
          setIsLoading(true);
          const response = await axios.get('http://127.0.0.1:8000/api/vehicles/ecus', {
            params: {
              engine_id: selectedEngine,
              generation_id: selectedGeneration,
              model_id: selectedModel,
              brand_id: selectedBrand,
              category_id: selectedCategory,
            },
          });
          const sortedEcUs = response.data.sort((a, b) =>
            a.ecu_name.localeCompare(b.ecu_name)
          );
          setEcUs(sortedEcUs);
        } catch (error) {
          console.error('Error fetching ECUs:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setEcUs([]); // Clear ECUs if no engine selected
      }
    };

    fetchEcUs();
  }, [selectedEngine, selectedGeneration, selectedModel, selectedBrand, selectedCategory]);

  // Handle selection change
  const handleSelectionChange = (setSelectionFunction) => (e) => {
    setSelectionFunction(e.target.value);
  };

  // Check if all selections are made to enable the "Go to Car Details" button
  const isSelectionComplete =
    selectedCategory &&
    selectedBrand &&
    selectedModel &&
    selectedGeneration &&
    selectedEngine &&
    selectedEcu;

  return (
    <section className="call-action section-padding sub-bg bg-img" style={{ backgroundImage: `url("/img/patrn.svg")`, marginTop: '-100px' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <h2 className="wow words chars splitting" data-splitting>Konfigurator <br /></h2>
            </div>
          </div>
        </div>

        {/* Category Selection */}
        <div className="row">
          {categories.map((category) => (
            <div key={category.category_id} className="col-sm-6 col-md-4 col-lg-2 valign mb-5 mt-5">
              <div className="d-flex flex-column align-items-center">
                <img src={`/img/${category.category_name.toLowerCase().replace(' ', '-')}.png`} alt={`${category.category_name} Icon`} className="img-fluid" />
                <div
                  className={`butn bord curve wow fadeInUp ${selectedCategory === category.category_id ? 'selected' : ''}`}
                  data-wow-delay=".5s"
                  onClick={() => setSelectedCategory(category.category_id)} // Update state directly
                >
                  <span>{category.category_name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand, Model, Generation, Engine, and ECU Selection in Responsive Grid */}
        <div className="row mt-40">
          {/* Brand Select */}
          <div className="col-lg-4 col-md-6 col-12 mb-3 position-relative">
            <select
              className="form-select border-radius-custom"
              value={selectedBrand || ''}
              onChange={handleSelectionChange(setSelectedBrand)}
              disabled={!selectedCategory} // Disable if no category is selected
            >
              <option value="" disabled selected hidden>
                Marke ausw&auml;hlen
              </option>
              {brands.map((brand) => (
                <option key={brand.brand_id} value={brand.brand_id}>
                  {brand.brand_name}
                </option>
              ))}
            </select>
          </div>

          {/* Model Select */}
          <div className="col-lg-4 col-md-6 col-12 mb-3 position-relative">
            <select
              className="form-select border-radius-custom"
              value={selectedModel || ''}
              onChange={handleSelectionChange(setSelectedModel)}
              disabled={!selectedBrand} // Disable if no brand is selected
            >
              <option value="" disabled selected hidden>
                Modell ausw&auml;hlen
              </option>
              {models.map((model) => (
                <option key={model.model_id} value={model.model_id}>
                  {model.model_name}
                </option>
              ))}
            </select>
          </div>

          {/* Generation Select */}
          <div className="col-lg-4 col-md-6 col-12 mb-3 position-relative">
            <select
              className="form-select border-radius-custom"
              value={selectedGeneration || ''}
              onChange={handleSelectionChange(setSelectedGeneration)}
              disabled={!selectedModel} // Disable if no model is selected
            >
              <option value="" disabled selected hidden>
                Generation ausw&auml;hlen
              </option>
              {generations.map((generation) => (
                <option key={generation.generation_id} value={generation.generation_id}>
                  {generation.generation_name}
                </option>
              ))}
            </select>
          </div>

          {/* Engine Select */}
          <div className="col-lg-4 col-md-6 col-12 mb-3 position-relative">
            <select
              className="form-select border-radius-custom"
              value={selectedEngine || ''}
              onChange={handleSelectionChange(setSelectedEngine)}
              disabled={!selectedGeneration} // Disable if no generation is selected
            >
              <option value="" disabled selected hidden>
                Motor ausw&auml;hlen
              </option>
              {engines.map((engine) => (
                <option key={engine.engine_id} value={engine.engine_id}>
                  {engine.engine_name}
                </option>
              ))}
            </select>
          </div>

          {/* ECU Select */}
          <div className="col-lg-4 col-md-6 col-12 mb-3 position-relative">
            <select
              className="form-select border-radius-custom"
              value={selectedEcu || ''}
              onChange={handleSelectionChange(setSelectedEcu)}
              disabled={!selectedEngine} // Disable if no engine is selected
            >
              <option value="" disabled selected hidden>
                ECU ausw&auml;hlen
              </option>
              {ecus.map((ecu) => (
                <option key={ecu.ecu_id} value={ecu.ecu_id}>
                  {ecu.ecu_name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Button to go to car details */}
        <div className="row">
          <div className="col-md-12 text-center">
            <Link href="/car/cardetails">
              <button
                className={`butn dark ${!isSelectionComplete ? 'disabled' : ''}`}
                disabled={!isSelectionComplete}
              >
                <span>Go to Car Details</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default MyCar;
