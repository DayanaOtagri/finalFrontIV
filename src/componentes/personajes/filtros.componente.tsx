import { ChangeEvent, FC } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector} from "react-redux";
import { buscarPersonajesThunk } from "../redux/actions/personajesAction";
import { IRootState } from "../redux/store/store";
import "./filtros.css";

/**
 * Personajes filtrados 
 *
 * @returns {React.ReactElement} JSX element
 */
const Filtros: FC = () => {
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const query = useSelector((state) => state.personajes.query);
  const dispatch = useDispatch();

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    let query = e.target.value;
    dispatch(buscarPersonajesThunk(query));
  };

  return (
    <div className="filtros">
      <label htmlFor="filtro">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        onChange={onChange}
        value={query}
        name="filtro"
        autoFocus={true}
      />
    </div>
  );
};

export default Filtros;
