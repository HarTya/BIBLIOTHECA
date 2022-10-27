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
    const [priceFilterState, setPriceFilterState] = useState(cheaperPrice);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={styles.homePage}>
            <div className={styles.homePage_filterPanel}>
                {isSearchOpen ? <Input value={searchValue} setValue={setSearchValue} placeholder={'Пошук...'} type={'string'} autoFocus /> :
                    <>
                        {priceFilterState === cheaperPrice ? 
                            <div onClick={() => setPriceFilterState(expensivePrice)}>
                                <PriceDown size={40} />
                            </div> :
                            priceFilterState === expensivePrice ? 
                            <div onClick={() => setPriceFilterState(cheaperPrice)}>
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