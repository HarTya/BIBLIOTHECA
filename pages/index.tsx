import Close from '@/components/UI/icons/Close';
import PriceDown from '@/components/UI/icons/PriceDown';
import PriceUp from '@/components/UI/icons/PriceUp';
import Search from '@/components/UI/icons/Search';
import Star from '@/components/UI/icons/Star';
import Input from '@/components/UI/Input';
import styles from '@/styles/HomePage.module.scss';
import { useState } from 'react';

export default function HomePage() {

    const cheaperPrice = 'cheaper';
    const expensivePrice = 'expensive';
    const [priceFiltrationState, setPriceFiltrationState] = useState(cheaperPrice);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={styles.homePage}>
            <div className={styles.homePage_filtrationPanel}>
                {isSearchOpen ? <Input value={searchValue} setValue={setSearchValue} placeholder={'Пошук...'} type={'string'} autoFocus /> :
                    <>
                        {priceFiltrationState === cheaperPrice ? 
                            <div onClick={() => setPriceFiltrationState(expensivePrice)}>
                                <PriceDown size={40} />
                            </div> :
                            priceFiltrationState === expensivePrice ? 
                            <div onClick={() => setPriceFiltrationState(cheaperPrice)}>
                                <PriceUp size={40} />
                            </div> :
                            <></>
                        }
                        <Star size={40} />
                    </>
                }
                <div 
                    onClick={
                        () => {
                            if (isSearchOpen) {
                                setSearchValue('')
                                return setIsSearchOpen(false)
                            }
                            return setIsSearchOpen(true)
                        }
                    }
                >
                    {isSearchOpen ? <Close size={40} /> : <Search size={40} />}
                </div>
            </div>
        </div>
    );
}