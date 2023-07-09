import Search from "lms-icons/components/Search";
import Fuse from "fuse.js";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Grid from "../../../src/components/Grid";
import Icon from "../../../src/components/Icon";
import Input from "../../../src/components/Input";
import Modal from "../../../src/components/Modal";
import ModalBody from "../../../src/components/ModalBody";
import ModalHeader from "../../../src/components/ModalHeader";
import Typography, {
  TypoSizes,
  TypoWeights,
} from "../../../src/components/Typography";
import debounce from "../../../src/utils/debounce";
import isBrowser from "./../../../src/utils/isBrowser";
import SearchResult from "./SearchResult";
import styles from "./styles.module.scss";
import { createDocumentsFromSections } from "./utils";

const DEBOUNCE_TIME_MS = 250;

function SearchBox({ searchController, allSections }: any): JSX.Element {
  const [open, setOpenState] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const searchBoxRef = useRef<any>();
  const fuseRef = useRef<any>();

  const closeModal = useCallback(() => {
    setOpenState(false);
  }, [setOpenState]);

  function handleOpenShorcutPress(e): void {
    const isShortcutPressed = (e.ctrlKey || e.metaKey) && e.which === 74;
    if (!open && isShortcutPressed) {
      setOpenState(true);
    }
  }

  const getSearchResult = useCallback(
    debounce((keyword) => {
      const fuse = fuseRef.current;
      const result = fuse.search(keyword);
      setSearchResult(result);
    }, DEBOUNCE_TIME_MS),
    [fuseRef.current]
  );

  const onInputChange = useCallback(
    (e) => {
      const searchKeyword = e.target.value || "";
      setSearchText(searchKeyword);
      if (searchKeyword.length < 2) {
        setSearchResult([]);
      } else {
        setSearchResult([]);
        getSearchResult(searchKeyword);
      }
    },
    [setSearchText, getSearchResult]
  );

  const onResultClick = useCallback(
    (item) => {
      if (isBrowser()) {
        window.location = item.link;
      }
      closeModal();
    },
    [closeModal]
  );

  useEffect(() => {
    searchController.current = setOpenState;
    document.addEventListener("keydown", handleOpenShorcutPress, false);

    const options = {
      shouldSort: true,
      findAllMatches: true,
      includeScore: true,
      includeMatches: true,
      threshold: 0.5,
      location: 150,
      distance: 300,
      minMatchCharLength: 1,
      keys: [
        {
          name: "name",
          weight: 0.7,
        },
        {
          name: "data.code",
          weight: 0.2,
        },
        {
          name: "data.markdown",
          weight: 0.3,
        },
      ],
    };

    const documents = createDocumentsFromSections(allSections);
    fuseRef.current = new Fuse(documents, options);

    return () => {
      document.removeEventListener("keydown", handleOpenShorcutPress);
    };
  }, []);

  useEffect(() => {
    if (open && searchBoxRef.current) {
      setTimeout(() => {
        searchBoxRef.current.focus();
      }, 100);
    }
    if (!open) {
      setSearchText("");
      setSearchResult([]);
    }
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <Modal className={styles.search} onClose={closeModal} xs={12} lg={6} md={8}>
      <ModalHeader onClose={closeModal}>
        <Typography
          size={TypoSizes.subtitle1}
          component="span"
          weight={TypoWeights.bold}
        >
          Search
        </Typography>
      </ModalHeader>
      <ModalBody>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Input
              className={styles["search-input"]}
              ref={searchBoxRef}
              value={searchText}
              onChange={onInputChange}
              placeholder="Enter component name, state, props..."
              beforeInput={
                <Icon
                  className={styles["search-icon"]}
                  width={24}
                  height={24}
                  component={Search}
                />
              }
            />
          </Grid>
          <Grid className={styles.list} item>
            {searchResult.map((result) => (
              <Grid
                key={result.item.name}
                direction="column"
                spacing={2}
                container
              >
                <SearchResult onClick={onResultClick} result={result} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </ModalBody>
    </Modal>
  );
}

export default SearchBox;
