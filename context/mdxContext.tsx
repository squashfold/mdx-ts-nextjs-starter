import {
    createContext,
    useContext,
    useState,
    Dispatch,
    ReactElement,
    ReactNode,
    SetStateAction,
  } from 'react';
  
  type ContextProps = {
    prerequisites?: string[];
    setPrerequisites?: Dispatch<SetStateAction<string[]>>;
    tags?: string[];
    setTags?: Dispatch<SetStateAction<string[]>>;
  };
  
  type Props = {
    children: ReactNode;
  };
  
  const MdxComponentsContext = createContext({} as ContextProps);
  
  export function MdxComponentsProvider({ children }: Props): ReactElement {
    const [prerequisites, setPrerequisites] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);
  
    return (
      <MdxComponentsContext.Provider
        value={{
          prerequisites,
          setPrerequisites,
          tags,
          setTags,
        }}
      >
        {children}
      </MdxComponentsContext.Provider>
    );
  }
  
  export function useMdxComponentsContext(): ContextProps {
    return useContext(MdxComponentsContext);
  }