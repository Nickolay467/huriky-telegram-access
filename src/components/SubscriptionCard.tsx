
import React from 'react';
import { Check, Shield, Award, Star, ArrowRight } from 'lucide-react';

interface SubscriptionCardProps {
  type: 'monthly' | 'quarterly' | 'yearly';
  price: number;
  isPopular?: boolean;
  onClick: () => void;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ 
  type, 
  price, 
  isPopular = false,
  onClick 
}) => {
  const typeTitles = {
    monthly: 'Месячный',
    quarterly: 'Квартальный',
    yearly: 'Годовой'
  };
  
  const typeDescriptions = {
    monthly: '30 дней доступа',
    quarterly: '90 дней доступа',
    yearly: '365 дней доступа'
  };
  
  const discount = {
    monthly: null,
    quarterly: '10%',
    yearly: '20%'
  };

  return (
    <div 
      className={`telegram-card relative mb-4 glow-effect hover:bg-telegram-card/80 cursor-pointer transition-all ${isPopular ? 'border-2 border-huriky-yellow' : ''}`}
      onClick={onClick}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-huriky-yellow text-black text-xs font-bold py-1 px-2 rounded-bl-lg rounded-tr-lg flex items-center gap-1">
          <Award className="w-3 h-3" /> ПОПУЛЯРНЫЙ
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg flex items-center gap-1">
            {typeTitles[type]}
            {isPopular && <Star className="w-4 h-4 fill-huriky-yellow text-huriky-yellow" />}
          </h3>
          <p className="text-sm text-gray-400">{typeDescriptions[type]}</p>
          {discount[type] && (
            <span className="inline-block bg-green-900/30 text-green-400 text-xs font-semibold px-2 py-1 rounded mt-2">
              Экономия {discount[type]}
            </span>
          )}
        </div>
        
        <div className="text-right">
          <p className="font-bold text-2xl text-huriky-yellow">{price} ₽</p>
          <p className="text-sm text-gray-400">{Math.round(price / (type === 'monthly' ? 30 : type === 'quarterly' ? 90 : 365))} ₽/день</p>
        </div>
      </div>
      
      <div className="telegram-divider"></div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Shield className="w-4 h-4 text-huriky-yellow mr-2" />
          <span className="text-sm">Безопасное соединение</span>
        </div>
        <ArrowRight className="w-5 h-5 text-huriky-yellow" />
      </div>
    </div>
  );
};

export default SubscriptionCard;
