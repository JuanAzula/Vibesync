import { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextProps {
    searchInput: string,
    handleSearch: (input: string) => void
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearchContext must be used within a SearchProvider");
    }
    return context;
};

interface SearchProviderProps {
    children: ReactNode
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
    const [searchInput, setSearchInput] = useState<string>('');

    const handleSearch = (input: string) => {
        setSearchInput(input);
    };

    const value: SearchContextProps = {
        searchInput,
        handleSearch,
    }

    return  (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
    );
};


