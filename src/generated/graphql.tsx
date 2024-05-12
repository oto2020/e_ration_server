import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateDailyMenu = {
  __typename?: 'AggregateDailyMenu';
  _avg?: Maybe<DailyMenuAvgAggregate>;
  _count?: Maybe<DailyMenuCountAggregate>;
  _max?: Maybe<DailyMenuMaxAggregate>;
  _min?: Maybe<DailyMenuMinAggregate>;
  _sum?: Maybe<DailyMenuSumAggregate>;
};

export type AggregateDish = {
  __typename?: 'AggregateDish';
  _avg?: Maybe<DishAvgAggregate>;
  _count?: Maybe<DishCountAggregate>;
  _max?: Maybe<DishMaxAggregate>;
  _min?: Maybe<DishMinAggregate>;
  _sum?: Maybe<DishSumAggregate>;
};

export type AggregateDishNutrient = {
  __typename?: 'AggregateDishNutrient';
  _avg?: Maybe<DishNutrientAvgAggregate>;
  _count?: Maybe<DishNutrientCountAggregate>;
  _max?: Maybe<DishNutrientMaxAggregate>;
  _min?: Maybe<DishNutrientMinAggregate>;
  _sum?: Maybe<DishNutrientSumAggregate>;
};

export type AggregateDishProduct = {
  __typename?: 'AggregateDishProduct';
  _avg?: Maybe<DishProductAvgAggregate>;
  _count?: Maybe<DishProductCountAggregate>;
  _max?: Maybe<DishProductMaxAggregate>;
  _min?: Maybe<DishProductMinAggregate>;
  _sum?: Maybe<DishProductSumAggregate>;
};

export type AggregateMenuDish = {
  __typename?: 'AggregateMenuDish';
  _avg?: Maybe<MenuDishAvgAggregate>;
  _count?: Maybe<MenuDishCountAggregate>;
  _max?: Maybe<MenuDishMaxAggregate>;
  _min?: Maybe<MenuDishMinAggregate>;
  _sum?: Maybe<MenuDishSumAggregate>;
};

export type AggregateNutrient = {
  __typename?: 'AggregateNutrient';
  _avg?: Maybe<NutrientAvgAggregate>;
  _count?: Maybe<NutrientCountAggregate>;
  _max?: Maybe<NutrientMaxAggregate>;
  _min?: Maybe<NutrientMinAggregate>;
  _sum?: Maybe<NutrientSumAggregate>;
};

export type AggregateNutrientCategory = {
  __typename?: 'AggregateNutrientCategory';
  _avg?: Maybe<NutrientCategoryAvgAggregate>;
  _count?: Maybe<NutrientCategoryCountAggregate>;
  _max?: Maybe<NutrientCategoryMaxAggregate>;
  _min?: Maybe<NutrientCategoryMinAggregate>;
  _sum?: Maybe<NutrientCategorySumAggregate>;
};

export type AggregateProduct = {
  __typename?: 'AggregateProduct';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
};

export type AggregateProductCategory = {
  __typename?: 'AggregateProductCategory';
  _avg?: Maybe<ProductCategoryAvgAggregate>;
  _count?: Maybe<ProductCategoryCountAggregate>;
  _max?: Maybe<ProductCategoryMaxAggregate>;
  _min?: Maybe<ProductCategoryMinAggregate>;
  _sum?: Maybe<ProductCategorySumAggregate>;
};

export type AggregateProductClearWeight = {
  __typename?: 'AggregateProductClearWeight';
  _avg?: Maybe<ProductClearWeightAvgAggregate>;
  _count?: Maybe<ProductClearWeightCountAggregate>;
  _max?: Maybe<ProductClearWeightMaxAggregate>;
  _min?: Maybe<ProductClearWeightMinAggregate>;
  _sum?: Maybe<ProductClearWeightSumAggregate>;
};

export type AggregateProductMeasure = {
  __typename?: 'AggregateProductMeasure';
  _avg?: Maybe<ProductMeasureAvgAggregate>;
  _count?: Maybe<ProductMeasureCountAggregate>;
  _max?: Maybe<ProductMeasureMaxAggregate>;
  _min?: Maybe<ProductMeasureMinAggregate>;
  _sum?: Maybe<ProductMeasureSumAggregate>;
};

export type AggregateProductNutrient = {
  __typename?: 'AggregateProductNutrient';
  _avg?: Maybe<ProductNutrientAvgAggregate>;
  _count?: Maybe<ProductNutrientCountAggregate>;
  _max?: Maybe<ProductNutrientMaxAggregate>;
  _min?: Maybe<ProductNutrientMinAggregate>;
  _sum?: Maybe<ProductNutrientSumAggregate>;
};

export type DailyMenu = {
  __typename?: 'DailyMenu';
  MenuDishes: Array<MenuDish>;
  _count?: Maybe<DailyMenuCount>;
  date: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  mealType: MealType;
};


export type DailyMenuMenuDishesArgs = {
  cursor?: InputMaybe<MenuDishWhereUniqueInput>;
  distinct?: InputMaybe<Array<MenuDishScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MenuDishOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuDishWhereInput>;
};

export type DailyMenuAvgAggregate = {
  __typename?: 'DailyMenuAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type DailyMenuAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DailyMenuCount = {
  __typename?: 'DailyMenuCount';
  MenuDishes: Scalars['Int']['output'];
};


export type DailyMenuCountMenuDishesArgs = {
  where?: InputMaybe<MenuDishWhereInput>;
};

export type DailyMenuCountAggregate = {
  __typename?: 'DailyMenuCountAggregate';
  _all: Scalars['Int']['output'];
  date: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  mealType: Scalars['Int']['output'];
};

export type DailyMenuCountOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mealType?: InputMaybe<SortOrder>;
};

export type DailyMenuCreateInput = {
  MenuDishes?: InputMaybe<MenuDishCreateNestedManyWithoutDailyMenuInput>;
  date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  mealType: MealType;
};

export type DailyMenuCreateManyInput = {
  date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mealType: MealType;
};

export type DailyMenuCreateNestedOneWithoutMenuDishesInput = {
  connect?: InputMaybe<DailyMenuWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DailyMenuCreateOrConnectWithoutMenuDishesInput>;
  create?: InputMaybe<DailyMenuCreateWithoutMenuDishesInput>;
};

export type DailyMenuCreateOrConnectWithoutMenuDishesInput = {
  create: DailyMenuCreateWithoutMenuDishesInput;
  where: DailyMenuWhereUniqueInput;
};

export type DailyMenuCreateWithoutMenuDishesInput = {
  date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  mealType: MealType;
};

export type DailyMenuGroupBy = {
  __typename?: 'DailyMenuGroupBy';
  _avg?: Maybe<DailyMenuAvgAggregate>;
  _count?: Maybe<DailyMenuCountAggregate>;
  _max?: Maybe<DailyMenuMaxAggregate>;
  _min?: Maybe<DailyMenuMinAggregate>;
  _sum?: Maybe<DailyMenuSumAggregate>;
  date: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  mealType: MealType;
};

export type DailyMenuMaxAggregate = {
  __typename?: 'DailyMenuMaxAggregate';
  date?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  mealType?: Maybe<MealType>;
};

export type DailyMenuMaxOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mealType?: InputMaybe<SortOrder>;
};

export type DailyMenuMinAggregate = {
  __typename?: 'DailyMenuMinAggregate';
  date?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  mealType?: Maybe<MealType>;
};

export type DailyMenuMinOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mealType?: InputMaybe<SortOrder>;
};

export type DailyMenuOrderByWithAggregationInput = {
  _avg?: InputMaybe<DailyMenuAvgOrderByAggregateInput>;
  _count?: InputMaybe<DailyMenuCountOrderByAggregateInput>;
  _max?: InputMaybe<DailyMenuMaxOrderByAggregateInput>;
  _min?: InputMaybe<DailyMenuMinOrderByAggregateInput>;
  _sum?: InputMaybe<DailyMenuSumOrderByAggregateInput>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mealType?: InputMaybe<SortOrder>;
};

export type DailyMenuOrderByWithRelationInput = {
  MenuDishes?: InputMaybe<MenuDishOrderByRelationAggregateInput>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mealType?: InputMaybe<SortOrder>;
};

export type DailyMenuRelationFilter = {
  is?: InputMaybe<DailyMenuWhereInput>;
  isNot?: InputMaybe<DailyMenuWhereInput>;
};

export enum DailyMenuScalarFieldEnum {
  Date = 'date',
  Id = 'id',
  MealType = 'mealType'
}

export type DailyMenuScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DailyMenuScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DailyMenuScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DailyMenuScalarWhereWithAggregatesInput>>;
  date?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  mealType?: InputMaybe<EnumMealTypeWithAggregatesFilter>;
};

export type DailyMenuSumAggregate = {
  __typename?: 'DailyMenuSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type DailyMenuSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DailyMenuUpdateInput = {
  MenuDishes?: InputMaybe<MenuDishUpdateManyWithoutDailyMenuNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  mealType?: InputMaybe<EnumMealTypeFieldUpdateOperationsInput>;
};

export type DailyMenuUpdateManyMutationInput = {
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  mealType?: InputMaybe<EnumMealTypeFieldUpdateOperationsInput>;
};

export type DailyMenuUpdateOneRequiredWithoutMenuDishesNestedInput = {
  connect?: InputMaybe<DailyMenuWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DailyMenuCreateOrConnectWithoutMenuDishesInput>;
  create?: InputMaybe<DailyMenuCreateWithoutMenuDishesInput>;
  update?: InputMaybe<DailyMenuUpdateToOneWithWhereWithoutMenuDishesInput>;
  upsert?: InputMaybe<DailyMenuUpsertWithoutMenuDishesInput>;
};

export type DailyMenuUpdateToOneWithWhereWithoutMenuDishesInput = {
  data: DailyMenuUpdateWithoutMenuDishesInput;
  where?: InputMaybe<DailyMenuWhereInput>;
};

export type DailyMenuUpdateWithoutMenuDishesInput = {
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  mealType?: InputMaybe<EnumMealTypeFieldUpdateOperationsInput>;
};

export type DailyMenuUpsertWithoutMenuDishesInput = {
  create: DailyMenuCreateWithoutMenuDishesInput;
  update: DailyMenuUpdateWithoutMenuDishesInput;
  where?: InputMaybe<DailyMenuWhereInput>;
};

export type DailyMenuWhereInput = {
  AND?: InputMaybe<Array<DailyMenuWhereInput>>;
  MenuDishes?: InputMaybe<MenuDishListRelationFilter>;
  NOT?: InputMaybe<Array<DailyMenuWhereInput>>;
  OR?: InputMaybe<Array<DailyMenuWhereInput>>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  mealType?: InputMaybe<EnumMealTypeFilter>;
};

export type DailyMenuWhereUniqueInput = {
  AND?: InputMaybe<Array<DailyMenuWhereInput>>;
  MenuDishes?: InputMaybe<MenuDishListRelationFilter>;
  NOT?: InputMaybe<Array<DailyMenuWhereInput>>;
  OR?: InputMaybe<Array<DailyMenuWhereInput>>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mealType?: InputMaybe<EnumMealTypeFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type Dish = {
  __typename?: 'Dish';
  MenuDishes: Array<MenuDish>;
  _count?: Maybe<DishCount>;
  description?: Maybe<Scalars['String']['output']>;
  dishNutrients: Array<DishNutrient>;
  dishProducts: Array<DishProduct>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};


export type DishMenuDishesArgs = {
  cursor?: InputMaybe<MenuDishWhereUniqueInput>;
  distinct?: InputMaybe<Array<MenuDishScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MenuDishOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuDishWhereInput>;
};


export type DishDishNutrientsArgs = {
  cursor?: InputMaybe<DishNutrientWhereUniqueInput>;
  distinct?: InputMaybe<Array<DishNutrientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DishNutrientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishNutrientWhereInput>;
};


export type DishDishProductsArgs = {
  cursor?: InputMaybe<DishProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<DishProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DishProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishProductWhereInput>;
};

export type DishAvgAggregate = {
  __typename?: 'DishAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type DishAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DishCount = {
  __typename?: 'DishCount';
  MenuDishes: Scalars['Int']['output'];
  dishNutrients: Scalars['Int']['output'];
  dishProducts: Scalars['Int']['output'];
};


export type DishCountMenuDishesArgs = {
  where?: InputMaybe<MenuDishWhereInput>;
};


export type DishCountDishNutrientsArgs = {
  where?: InputMaybe<DishNutrientWhereInput>;
};


export type DishCountDishProductsArgs = {
  where?: InputMaybe<DishProductWhereInput>;
};

export type DishCountAggregate = {
  __typename?: 'DishCountAggregate';
  _all: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type DishCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type DishCreateInput = {
  MenuDishes?: InputMaybe<MenuDishCreateNestedManyWithoutDishInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  dishNutrients?: InputMaybe<DishNutrientCreateNestedManyWithoutDishInput>;
  dishProducts?: InputMaybe<DishProductCreateNestedManyWithoutDishInput>;
  name: Scalars['String']['input'];
};

export type DishCreateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type DishCreateNestedOneWithoutDishNutrientsInput = {
  connect?: InputMaybe<DishWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DishCreateOrConnectWithoutDishNutrientsInput>;
  create?: InputMaybe<DishCreateWithoutDishNutrientsInput>;
};

export type DishCreateNestedOneWithoutDishProductsInput = {
  connect?: InputMaybe<DishWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DishCreateOrConnectWithoutDishProductsInput>;
  create?: InputMaybe<DishCreateWithoutDishProductsInput>;
};

export type DishCreateNestedOneWithoutMenuDishesInput = {
  connect?: InputMaybe<DishWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DishCreateOrConnectWithoutMenuDishesInput>;
  create?: InputMaybe<DishCreateWithoutMenuDishesInput>;
};

export type DishCreateOrConnectWithoutDishNutrientsInput = {
  create: DishCreateWithoutDishNutrientsInput;
  where: DishWhereUniqueInput;
};

export type DishCreateOrConnectWithoutDishProductsInput = {
  create: DishCreateWithoutDishProductsInput;
  where: DishWhereUniqueInput;
};

export type DishCreateOrConnectWithoutMenuDishesInput = {
  create: DishCreateWithoutMenuDishesInput;
  where: DishWhereUniqueInput;
};

export type DishCreateWithoutDishNutrientsInput = {
  MenuDishes?: InputMaybe<MenuDishCreateNestedManyWithoutDishInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  dishProducts?: InputMaybe<DishProductCreateNestedManyWithoutDishInput>;
  name: Scalars['String']['input'];
};

export type DishCreateWithoutDishProductsInput = {
  MenuDishes?: InputMaybe<MenuDishCreateNestedManyWithoutDishInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  dishNutrients?: InputMaybe<DishNutrientCreateNestedManyWithoutDishInput>;
  name: Scalars['String']['input'];
};

export type DishCreateWithoutMenuDishesInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  dishNutrients?: InputMaybe<DishNutrientCreateNestedManyWithoutDishInput>;
  dishProducts?: InputMaybe<DishProductCreateNestedManyWithoutDishInput>;
  name: Scalars['String']['input'];
};

export type DishGroupBy = {
  __typename?: 'DishGroupBy';
  _avg?: Maybe<DishAvgAggregate>;
  _count?: Maybe<DishCountAggregate>;
  _max?: Maybe<DishMaxAggregate>;
  _min?: Maybe<DishMinAggregate>;
  _sum?: Maybe<DishSumAggregate>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type DishMaxAggregate = {
  __typename?: 'DishMaxAggregate';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type DishMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type DishMinAggregate = {
  __typename?: 'DishMinAggregate';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type DishMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type DishNutrient = {
  __typename?: 'DishNutrient';
  amount: Scalars['Float']['output'];
  dish: Dish;
  dishId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  nutrient: Nutrient;
  nutrientId: Scalars['String']['output'];
};

export type DishNutrientAvgAggregate = {
  __typename?: 'DishNutrientAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  dishId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type DishNutrientAvgOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type DishNutrientCountAggregate = {
  __typename?: 'DishNutrientCountAggregate';
  _all: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  dishId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  nutrientId: Scalars['Int']['output'];
};

export type DishNutrientCountOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nutrientId?: InputMaybe<SortOrder>;
};

export type DishNutrientCreateInput = {
  amount: Scalars['Float']['input'];
  dish: DishCreateNestedOneWithoutDishNutrientsInput;
  nutrient: NutrientCreateNestedOneWithoutDishNutrientsInput;
};

export type DishNutrientCreateManyDishInput = {
  amount: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  nutrientId: Scalars['String']['input'];
};

export type DishNutrientCreateManyDishInputEnvelope = {
  data: Array<DishNutrientCreateManyDishInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DishNutrientCreateManyInput = {
  amount: Scalars['Float']['input'];
  dishId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  nutrientId: Scalars['String']['input'];
};

export type DishNutrientCreateManyNutrientInput = {
  amount: Scalars['Float']['input'];
  dishId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type DishNutrientCreateManyNutrientInputEnvelope = {
  data: Array<DishNutrientCreateManyNutrientInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DishNutrientCreateNestedManyWithoutDishInput = {
  connect?: InputMaybe<Array<DishNutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DishNutrientCreateOrConnectWithoutDishInput>>;
  create?: InputMaybe<Array<DishNutrientCreateWithoutDishInput>>;
  createMany?: InputMaybe<DishNutrientCreateManyDishInputEnvelope>;
};

export type DishNutrientCreateNestedManyWithoutNutrientInput = {
  connect?: InputMaybe<Array<DishNutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DishNutrientCreateOrConnectWithoutNutrientInput>>;
  create?: InputMaybe<Array<DishNutrientCreateWithoutNutrientInput>>;
  createMany?: InputMaybe<DishNutrientCreateManyNutrientInputEnvelope>;
};

export type DishNutrientCreateOrConnectWithoutDishInput = {
  create: DishNutrientCreateWithoutDishInput;
  where: DishNutrientWhereUniqueInput;
};

export type DishNutrientCreateOrConnectWithoutNutrientInput = {
  create: DishNutrientCreateWithoutNutrientInput;
  where: DishNutrientWhereUniqueInput;
};

export type DishNutrientCreateWithoutDishInput = {
  amount: Scalars['Float']['input'];
  nutrient: NutrientCreateNestedOneWithoutDishNutrientsInput;
};

export type DishNutrientCreateWithoutNutrientInput = {
  amount: Scalars['Float']['input'];
  dish: DishCreateNestedOneWithoutDishNutrientsInput;
};

export type DishNutrientDishIdNutrientIdCompoundUniqueInput = {
  dishId: Scalars['Int']['input'];
  nutrientId: Scalars['String']['input'];
};

export type DishNutrientGroupBy = {
  __typename?: 'DishNutrientGroupBy';
  _avg?: Maybe<DishNutrientAvgAggregate>;
  _count?: Maybe<DishNutrientCountAggregate>;
  _max?: Maybe<DishNutrientMaxAggregate>;
  _min?: Maybe<DishNutrientMinAggregate>;
  _sum?: Maybe<DishNutrientSumAggregate>;
  amount: Scalars['Float']['output'];
  dishId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  nutrientId: Scalars['String']['output'];
};

export type DishNutrientListRelationFilter = {
  every?: InputMaybe<DishNutrientWhereInput>;
  none?: InputMaybe<DishNutrientWhereInput>;
  some?: InputMaybe<DishNutrientWhereInput>;
};

export type DishNutrientMaxAggregate = {
  __typename?: 'DishNutrientMaxAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  dishId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nutrientId?: Maybe<Scalars['String']['output']>;
};

export type DishNutrientMaxOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nutrientId?: InputMaybe<SortOrder>;
};

export type DishNutrientMinAggregate = {
  __typename?: 'DishNutrientMinAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  dishId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nutrientId?: Maybe<Scalars['String']['output']>;
};

export type DishNutrientMinOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nutrientId?: InputMaybe<SortOrder>;
};

export type DishNutrientOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type DishNutrientOrderByWithAggregationInput = {
  _avg?: InputMaybe<DishNutrientAvgOrderByAggregateInput>;
  _count?: InputMaybe<DishNutrientCountOrderByAggregateInput>;
  _max?: InputMaybe<DishNutrientMaxOrderByAggregateInput>;
  _min?: InputMaybe<DishNutrientMinOrderByAggregateInput>;
  _sum?: InputMaybe<DishNutrientSumOrderByAggregateInput>;
  amount?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nutrientId?: InputMaybe<SortOrder>;
};

export type DishNutrientOrderByWithRelationInput = {
  amount?: InputMaybe<SortOrder>;
  dish?: InputMaybe<DishOrderByWithRelationInput>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nutrient?: InputMaybe<NutrientOrderByWithRelationInput>;
  nutrientId?: InputMaybe<SortOrder>;
};

export enum DishNutrientScalarFieldEnum {
  Amount = 'amount',
  DishId = 'dishId',
  Id = 'id',
  NutrientId = 'nutrientId'
}

export type DishNutrientScalarWhereInput = {
  AND?: InputMaybe<Array<DishNutrientScalarWhereInput>>;
  NOT?: InputMaybe<Array<DishNutrientScalarWhereInput>>;
  OR?: InputMaybe<Array<DishNutrientScalarWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  dishId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  nutrientId?: InputMaybe<StringFilter>;
};

export type DishNutrientScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DishNutrientScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DishNutrientScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DishNutrientScalarWhereWithAggregatesInput>>;
  amount?: InputMaybe<FloatWithAggregatesFilter>;
  dishId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  nutrientId?: InputMaybe<StringWithAggregatesFilter>;
};

export type DishNutrientSumAggregate = {
  __typename?: 'DishNutrientSumAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  dishId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type DishNutrientSumOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type DishNutrientUpdateInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  dish?: InputMaybe<DishUpdateOneRequiredWithoutDishNutrientsNestedInput>;
  nutrient?: InputMaybe<NutrientUpdateOneRequiredWithoutDishNutrientsNestedInput>;
};

export type DishNutrientUpdateManyMutationInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type DishNutrientUpdateManyWithWhereWithoutDishInput = {
  data: DishNutrientUpdateManyMutationInput;
  where: DishNutrientScalarWhereInput;
};

export type DishNutrientUpdateManyWithWhereWithoutNutrientInput = {
  data: DishNutrientUpdateManyMutationInput;
  where: DishNutrientScalarWhereInput;
};

export type DishNutrientUpdateManyWithoutDishNestedInput = {
  connect?: InputMaybe<Array<DishNutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DishNutrientCreateOrConnectWithoutDishInput>>;
  create?: InputMaybe<Array<DishNutrientCreateWithoutDishInput>>;
  createMany?: InputMaybe<DishNutrientCreateManyDishInputEnvelope>;
  delete?: InputMaybe<Array<DishNutrientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DishNutrientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DishNutrientWhereUniqueInput>>;
  set?: InputMaybe<Array<DishNutrientWhereUniqueInput>>;
  update?: InputMaybe<Array<DishNutrientUpdateWithWhereUniqueWithoutDishInput>>;
  updateMany?: InputMaybe<Array<DishNutrientUpdateManyWithWhereWithoutDishInput>>;
  upsert?: InputMaybe<Array<DishNutrientUpsertWithWhereUniqueWithoutDishInput>>;
};

export type DishNutrientUpdateManyWithoutNutrientNestedInput = {
  connect?: InputMaybe<Array<DishNutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DishNutrientCreateOrConnectWithoutNutrientInput>>;
  create?: InputMaybe<Array<DishNutrientCreateWithoutNutrientInput>>;
  createMany?: InputMaybe<DishNutrientCreateManyNutrientInputEnvelope>;
  delete?: InputMaybe<Array<DishNutrientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DishNutrientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DishNutrientWhereUniqueInput>>;
  set?: InputMaybe<Array<DishNutrientWhereUniqueInput>>;
  update?: InputMaybe<Array<DishNutrientUpdateWithWhereUniqueWithoutNutrientInput>>;
  updateMany?: InputMaybe<Array<DishNutrientUpdateManyWithWhereWithoutNutrientInput>>;
  upsert?: InputMaybe<Array<DishNutrientUpsertWithWhereUniqueWithoutNutrientInput>>;
};

export type DishNutrientUpdateWithWhereUniqueWithoutDishInput = {
  data: DishNutrientUpdateWithoutDishInput;
  where: DishNutrientWhereUniqueInput;
};

export type DishNutrientUpdateWithWhereUniqueWithoutNutrientInput = {
  data: DishNutrientUpdateWithoutNutrientInput;
  where: DishNutrientWhereUniqueInput;
};

export type DishNutrientUpdateWithoutDishInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  nutrient?: InputMaybe<NutrientUpdateOneRequiredWithoutDishNutrientsNestedInput>;
};

export type DishNutrientUpdateWithoutNutrientInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  dish?: InputMaybe<DishUpdateOneRequiredWithoutDishNutrientsNestedInput>;
};

export type DishNutrientUpsertWithWhereUniqueWithoutDishInput = {
  create: DishNutrientCreateWithoutDishInput;
  update: DishNutrientUpdateWithoutDishInput;
  where: DishNutrientWhereUniqueInput;
};

export type DishNutrientUpsertWithWhereUniqueWithoutNutrientInput = {
  create: DishNutrientCreateWithoutNutrientInput;
  update: DishNutrientUpdateWithoutNutrientInput;
  where: DishNutrientWhereUniqueInput;
};

export type DishNutrientWhereInput = {
  AND?: InputMaybe<Array<DishNutrientWhereInput>>;
  NOT?: InputMaybe<Array<DishNutrientWhereInput>>;
  OR?: InputMaybe<Array<DishNutrientWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  dish?: InputMaybe<DishRelationFilter>;
  dishId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  nutrient?: InputMaybe<NutrientRelationFilter>;
  nutrientId?: InputMaybe<StringFilter>;
};

export type DishNutrientWhereUniqueInput = {
  AND?: InputMaybe<Array<DishNutrientWhereInput>>;
  NOT?: InputMaybe<Array<DishNutrientWhereInput>>;
  OR?: InputMaybe<Array<DishNutrientWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  dish?: InputMaybe<DishRelationFilter>;
  dishId?: InputMaybe<IntFilter>;
  dishId_nutrientId?: InputMaybe<DishNutrientDishIdNutrientIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  nutrient?: InputMaybe<NutrientRelationFilter>;
  nutrientId?: InputMaybe<StringFilter>;
};

export type DishOrderByWithAggregationInput = {
  _avg?: InputMaybe<DishAvgOrderByAggregateInput>;
  _count?: InputMaybe<DishCountOrderByAggregateInput>;
  _max?: InputMaybe<DishMaxOrderByAggregateInput>;
  _min?: InputMaybe<DishMinOrderByAggregateInput>;
  _sum?: InputMaybe<DishSumOrderByAggregateInput>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type DishOrderByWithRelationInput = {
  MenuDishes?: InputMaybe<MenuDishOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrderInput>;
  dishNutrients?: InputMaybe<DishNutrientOrderByRelationAggregateInput>;
  dishProducts?: InputMaybe<DishProductOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type DishProduct = {
  __typename?: 'DishProduct';
  amount: Scalars['Float']['output'];
  cookCoeff: Scalars['Float']['output'];
  dish: Dish;
  dishId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  product: Product;
  productId: Scalars['Int']['output'];
};

export type DishProductAvgAggregate = {
  __typename?: 'DishProductAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  cookCoeff?: Maybe<Scalars['Float']['output']>;
  dishId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  productId?: Maybe<Scalars['Float']['output']>;
};

export type DishProductAvgOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  cookCoeff?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
};

export type DishProductCountAggregate = {
  __typename?: 'DishProductCountAggregate';
  _all: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  cookCoeff: Scalars['Int']['output'];
  dishId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
};

export type DishProductCountOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  cookCoeff?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
};

export type DishProductCreateInput = {
  amount: Scalars['Float']['input'];
  cookCoeff?: InputMaybe<Scalars['Float']['input']>;
  dish: DishCreateNestedOneWithoutDishProductsInput;
  product: ProductCreateNestedOneWithoutDishProductsInput;
};

export type DishProductCreateManyDishInput = {
  amount: Scalars['Float']['input'];
  cookCoeff?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  productId: Scalars['Int']['input'];
};

export type DishProductCreateManyDishInputEnvelope = {
  data: Array<DishProductCreateManyDishInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DishProductCreateManyInput = {
  amount: Scalars['Float']['input'];
  cookCoeff?: InputMaybe<Scalars['Float']['input']>;
  dishId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  productId: Scalars['Int']['input'];
};

export type DishProductCreateManyProductInput = {
  amount: Scalars['Float']['input'];
  cookCoeff?: InputMaybe<Scalars['Float']['input']>;
  dishId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type DishProductCreateManyProductInputEnvelope = {
  data: Array<DishProductCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DishProductCreateNestedManyWithoutDishInput = {
  connect?: InputMaybe<Array<DishProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DishProductCreateOrConnectWithoutDishInput>>;
  create?: InputMaybe<Array<DishProductCreateWithoutDishInput>>;
  createMany?: InputMaybe<DishProductCreateManyDishInputEnvelope>;
};

export type DishProductCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<DishProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DishProductCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<DishProductCreateWithoutProductInput>>;
  createMany?: InputMaybe<DishProductCreateManyProductInputEnvelope>;
};

export type DishProductCreateOrConnectWithoutDishInput = {
  create: DishProductCreateWithoutDishInput;
  where: DishProductWhereUniqueInput;
};

export type DishProductCreateOrConnectWithoutProductInput = {
  create: DishProductCreateWithoutProductInput;
  where: DishProductWhereUniqueInput;
};

export type DishProductCreateWithoutDishInput = {
  amount: Scalars['Float']['input'];
  cookCoeff?: InputMaybe<Scalars['Float']['input']>;
  product: ProductCreateNestedOneWithoutDishProductsInput;
};

export type DishProductCreateWithoutProductInput = {
  amount: Scalars['Float']['input'];
  cookCoeff?: InputMaybe<Scalars['Float']['input']>;
  dish: DishCreateNestedOneWithoutDishProductsInput;
};

export type DishProductDishIdProductIdCompoundUniqueInput = {
  dishId: Scalars['Int']['input'];
  productId: Scalars['Int']['input'];
};

export type DishProductGroupBy = {
  __typename?: 'DishProductGroupBy';
  _avg?: Maybe<DishProductAvgAggregate>;
  _count?: Maybe<DishProductCountAggregate>;
  _max?: Maybe<DishProductMaxAggregate>;
  _min?: Maybe<DishProductMinAggregate>;
  _sum?: Maybe<DishProductSumAggregate>;
  amount: Scalars['Float']['output'];
  cookCoeff: Scalars['Float']['output'];
  dishId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
};

export type DishProductListRelationFilter = {
  every?: InputMaybe<DishProductWhereInput>;
  none?: InputMaybe<DishProductWhereInput>;
  some?: InputMaybe<DishProductWhereInput>;
};

export type DishProductMaxAggregate = {
  __typename?: 'DishProductMaxAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  cookCoeff?: Maybe<Scalars['Float']['output']>;
  dishId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
};

export type DishProductMaxOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  cookCoeff?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
};

export type DishProductMinAggregate = {
  __typename?: 'DishProductMinAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  cookCoeff?: Maybe<Scalars['Float']['output']>;
  dishId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
};

export type DishProductMinOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  cookCoeff?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
};

export type DishProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type DishProductOrderByWithAggregationInput = {
  _avg?: InputMaybe<DishProductAvgOrderByAggregateInput>;
  _count?: InputMaybe<DishProductCountOrderByAggregateInput>;
  _max?: InputMaybe<DishProductMaxOrderByAggregateInput>;
  _min?: InputMaybe<DishProductMinOrderByAggregateInput>;
  _sum?: InputMaybe<DishProductSumOrderByAggregateInput>;
  amount?: InputMaybe<SortOrder>;
  cookCoeff?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
};

export type DishProductOrderByWithRelationInput = {
  amount?: InputMaybe<SortOrder>;
  cookCoeff?: InputMaybe<SortOrder>;
  dish?: InputMaybe<DishOrderByWithRelationInput>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
};

export enum DishProductScalarFieldEnum {
  Amount = 'amount',
  CookCoeff = 'cookCoeff',
  DishId = 'dishId',
  Id = 'id',
  ProductId = 'productId'
}

export type DishProductScalarWhereInput = {
  AND?: InputMaybe<Array<DishProductScalarWhereInput>>;
  NOT?: InputMaybe<Array<DishProductScalarWhereInput>>;
  OR?: InputMaybe<Array<DishProductScalarWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  cookCoeff?: InputMaybe<FloatFilter>;
  dishId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  productId?: InputMaybe<IntFilter>;
};

export type DishProductScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DishProductScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DishProductScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DishProductScalarWhereWithAggregatesInput>>;
  amount?: InputMaybe<FloatWithAggregatesFilter>;
  cookCoeff?: InputMaybe<FloatWithAggregatesFilter>;
  dishId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  productId?: InputMaybe<IntWithAggregatesFilter>;
};

export type DishProductSumAggregate = {
  __typename?: 'DishProductSumAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  cookCoeff?: Maybe<Scalars['Float']['output']>;
  dishId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
};

export type DishProductSumOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  cookCoeff?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
};

export type DishProductUpdateInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  cookCoeff?: InputMaybe<FloatFieldUpdateOperationsInput>;
  dish?: InputMaybe<DishUpdateOneRequiredWithoutDishProductsNestedInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutDishProductsNestedInput>;
};

export type DishProductUpdateManyMutationInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  cookCoeff?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type DishProductUpdateManyWithWhereWithoutDishInput = {
  data: DishProductUpdateManyMutationInput;
  where: DishProductScalarWhereInput;
};

export type DishProductUpdateManyWithWhereWithoutProductInput = {
  data: DishProductUpdateManyMutationInput;
  where: DishProductScalarWhereInput;
};

export type DishProductUpdateManyWithoutDishNestedInput = {
  connect?: InputMaybe<Array<DishProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DishProductCreateOrConnectWithoutDishInput>>;
  create?: InputMaybe<Array<DishProductCreateWithoutDishInput>>;
  createMany?: InputMaybe<DishProductCreateManyDishInputEnvelope>;
  delete?: InputMaybe<Array<DishProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DishProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DishProductWhereUniqueInput>>;
  set?: InputMaybe<Array<DishProductWhereUniqueInput>>;
  update?: InputMaybe<Array<DishProductUpdateWithWhereUniqueWithoutDishInput>>;
  updateMany?: InputMaybe<Array<DishProductUpdateManyWithWhereWithoutDishInput>>;
  upsert?: InputMaybe<Array<DishProductUpsertWithWhereUniqueWithoutDishInput>>;
};

export type DishProductUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<DishProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DishProductCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<DishProductCreateWithoutProductInput>>;
  createMany?: InputMaybe<DishProductCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<DishProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DishProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DishProductWhereUniqueInput>>;
  set?: InputMaybe<Array<DishProductWhereUniqueInput>>;
  update?: InputMaybe<Array<DishProductUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<DishProductUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<DishProductUpsertWithWhereUniqueWithoutProductInput>>;
};

export type DishProductUpdateWithWhereUniqueWithoutDishInput = {
  data: DishProductUpdateWithoutDishInput;
  where: DishProductWhereUniqueInput;
};

export type DishProductUpdateWithWhereUniqueWithoutProductInput = {
  data: DishProductUpdateWithoutProductInput;
  where: DishProductWhereUniqueInput;
};

export type DishProductUpdateWithoutDishInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  cookCoeff?: InputMaybe<FloatFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutDishProductsNestedInput>;
};

export type DishProductUpdateWithoutProductInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  cookCoeff?: InputMaybe<FloatFieldUpdateOperationsInput>;
  dish?: InputMaybe<DishUpdateOneRequiredWithoutDishProductsNestedInput>;
};

export type DishProductUpsertWithWhereUniqueWithoutDishInput = {
  create: DishProductCreateWithoutDishInput;
  update: DishProductUpdateWithoutDishInput;
  where: DishProductWhereUniqueInput;
};

export type DishProductUpsertWithWhereUniqueWithoutProductInput = {
  create: DishProductCreateWithoutProductInput;
  update: DishProductUpdateWithoutProductInput;
  where: DishProductWhereUniqueInput;
};

export type DishProductWhereInput = {
  AND?: InputMaybe<Array<DishProductWhereInput>>;
  NOT?: InputMaybe<Array<DishProductWhereInput>>;
  OR?: InputMaybe<Array<DishProductWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  cookCoeff?: InputMaybe<FloatFilter>;
  dish?: InputMaybe<DishRelationFilter>;
  dishId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<IntFilter>;
};

export type DishProductWhereUniqueInput = {
  AND?: InputMaybe<Array<DishProductWhereInput>>;
  NOT?: InputMaybe<Array<DishProductWhereInput>>;
  OR?: InputMaybe<Array<DishProductWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  cookCoeff?: InputMaybe<FloatFilter>;
  dish?: InputMaybe<DishRelationFilter>;
  dishId?: InputMaybe<IntFilter>;
  dishId_productId?: InputMaybe<DishProductDishIdProductIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<IntFilter>;
};

export type DishRelationFilter = {
  is?: InputMaybe<DishWhereInput>;
  isNot?: InputMaybe<DishWhereInput>;
};

export enum DishScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type DishScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DishScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DishScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DishScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type DishSumAggregate = {
  __typename?: 'DishSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type DishSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DishUpdateInput = {
  MenuDishes?: InputMaybe<MenuDishUpdateManyWithoutDishNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dishNutrients?: InputMaybe<DishNutrientUpdateManyWithoutDishNestedInput>;
  dishProducts?: InputMaybe<DishProductUpdateManyWithoutDishNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DishUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DishUpdateOneRequiredWithoutDishNutrientsNestedInput = {
  connect?: InputMaybe<DishWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DishCreateOrConnectWithoutDishNutrientsInput>;
  create?: InputMaybe<DishCreateWithoutDishNutrientsInput>;
  update?: InputMaybe<DishUpdateToOneWithWhereWithoutDishNutrientsInput>;
  upsert?: InputMaybe<DishUpsertWithoutDishNutrientsInput>;
};

export type DishUpdateOneRequiredWithoutDishProductsNestedInput = {
  connect?: InputMaybe<DishWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DishCreateOrConnectWithoutDishProductsInput>;
  create?: InputMaybe<DishCreateWithoutDishProductsInput>;
  update?: InputMaybe<DishUpdateToOneWithWhereWithoutDishProductsInput>;
  upsert?: InputMaybe<DishUpsertWithoutDishProductsInput>;
};

export type DishUpdateOneRequiredWithoutMenuDishesNestedInput = {
  connect?: InputMaybe<DishWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DishCreateOrConnectWithoutMenuDishesInput>;
  create?: InputMaybe<DishCreateWithoutMenuDishesInput>;
  update?: InputMaybe<DishUpdateToOneWithWhereWithoutMenuDishesInput>;
  upsert?: InputMaybe<DishUpsertWithoutMenuDishesInput>;
};

export type DishUpdateToOneWithWhereWithoutDishNutrientsInput = {
  data: DishUpdateWithoutDishNutrientsInput;
  where?: InputMaybe<DishWhereInput>;
};

export type DishUpdateToOneWithWhereWithoutDishProductsInput = {
  data: DishUpdateWithoutDishProductsInput;
  where?: InputMaybe<DishWhereInput>;
};

export type DishUpdateToOneWithWhereWithoutMenuDishesInput = {
  data: DishUpdateWithoutMenuDishesInput;
  where?: InputMaybe<DishWhereInput>;
};

export type DishUpdateWithoutDishNutrientsInput = {
  MenuDishes?: InputMaybe<MenuDishUpdateManyWithoutDishNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dishProducts?: InputMaybe<DishProductUpdateManyWithoutDishNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DishUpdateWithoutDishProductsInput = {
  MenuDishes?: InputMaybe<MenuDishUpdateManyWithoutDishNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dishNutrients?: InputMaybe<DishNutrientUpdateManyWithoutDishNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DishUpdateWithoutMenuDishesInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dishNutrients?: InputMaybe<DishNutrientUpdateManyWithoutDishNestedInput>;
  dishProducts?: InputMaybe<DishProductUpdateManyWithoutDishNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DishUpsertWithoutDishNutrientsInput = {
  create: DishCreateWithoutDishNutrientsInput;
  update: DishUpdateWithoutDishNutrientsInput;
  where?: InputMaybe<DishWhereInput>;
};

export type DishUpsertWithoutDishProductsInput = {
  create: DishCreateWithoutDishProductsInput;
  update: DishUpdateWithoutDishProductsInput;
  where?: InputMaybe<DishWhereInput>;
};

export type DishUpsertWithoutMenuDishesInput = {
  create: DishCreateWithoutMenuDishesInput;
  update: DishUpdateWithoutMenuDishesInput;
  where?: InputMaybe<DishWhereInput>;
};

export type DishWhereInput = {
  AND?: InputMaybe<Array<DishWhereInput>>;
  MenuDishes?: InputMaybe<MenuDishListRelationFilter>;
  NOT?: InputMaybe<Array<DishWhereInput>>;
  OR?: InputMaybe<Array<DishWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  dishNutrients?: InputMaybe<DishNutrientListRelationFilter>;
  dishProducts?: InputMaybe<DishProductListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type DishWhereUniqueInput = {
  AND?: InputMaybe<Array<DishWhereInput>>;
  MenuDishes?: InputMaybe<MenuDishListRelationFilter>;
  NOT?: InputMaybe<Array<DishWhereInput>>;
  OR?: InputMaybe<Array<DishWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  dishNutrients?: InputMaybe<DishNutrientListRelationFilter>;
  dishProducts?: InputMaybe<DishProductListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EnumMealTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<MealType>;
};

export type EnumMealTypeFilter = {
  equals?: InputMaybe<MealType>;
  in?: InputMaybe<Array<MealType>>;
  not?: InputMaybe<NestedEnumMealTypeFilter>;
  notIn?: InputMaybe<Array<MealType>>;
};

export type EnumMealTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumMealTypeFilter>;
  _min?: InputMaybe<NestedEnumMealTypeFilter>;
  equals?: InputMaybe<MealType>;
  in?: InputMaybe<Array<MealType>>;
  not?: InputMaybe<NestedEnumMealTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<MealType>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum MealType {
  Breakfast = 'BREAKFAST',
  Dinner = 'DINNER',
  LateSupper = 'LATE_SUPPER',
  Lunch = 'LUNCH',
  Snack = 'SNACK',
  Supper = 'SUPPER'
}

export type MenuDish = {
  __typename?: 'MenuDish';
  dailyMenu: DailyMenu;
  dailyMenuId: Scalars['Int']['output'];
  dish: Dish;
  dishId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  quantity: Scalars['Float']['output'];
};

export type MenuDishAvgAggregate = {
  __typename?: 'MenuDishAvgAggregate';
  dailyMenuId?: Maybe<Scalars['Float']['output']>;
  dishId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

export type MenuDishAvgOrderByAggregateInput = {
  dailyMenuId?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
};

export type MenuDishCountAggregate = {
  __typename?: 'MenuDishCountAggregate';
  _all: Scalars['Int']['output'];
  dailyMenuId: Scalars['Int']['output'];
  dishId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
};

export type MenuDishCountOrderByAggregateInput = {
  dailyMenuId?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
};

export type MenuDishCreateInput = {
  dailyMenu: DailyMenuCreateNestedOneWithoutMenuDishesInput;
  dish: DishCreateNestedOneWithoutMenuDishesInput;
  quantity: Scalars['Float']['input'];
};

export type MenuDishCreateManyDailyMenuInput = {
  dishId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  quantity: Scalars['Float']['input'];
};

export type MenuDishCreateManyDailyMenuInputEnvelope = {
  data: Array<MenuDishCreateManyDailyMenuInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuDishCreateManyDishInput = {
  dailyMenuId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  quantity: Scalars['Float']['input'];
};

export type MenuDishCreateManyDishInputEnvelope = {
  data: Array<MenuDishCreateManyDishInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuDishCreateManyInput = {
  dailyMenuId: Scalars['Int']['input'];
  dishId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  quantity: Scalars['Float']['input'];
};

export type MenuDishCreateNestedManyWithoutDailyMenuInput = {
  connect?: InputMaybe<Array<MenuDishWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MenuDishCreateOrConnectWithoutDailyMenuInput>>;
  create?: InputMaybe<Array<MenuDishCreateWithoutDailyMenuInput>>;
  createMany?: InputMaybe<MenuDishCreateManyDailyMenuInputEnvelope>;
};

export type MenuDishCreateNestedManyWithoutDishInput = {
  connect?: InputMaybe<Array<MenuDishWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MenuDishCreateOrConnectWithoutDishInput>>;
  create?: InputMaybe<Array<MenuDishCreateWithoutDishInput>>;
  createMany?: InputMaybe<MenuDishCreateManyDishInputEnvelope>;
};

export type MenuDishCreateOrConnectWithoutDailyMenuInput = {
  create: MenuDishCreateWithoutDailyMenuInput;
  where: MenuDishWhereUniqueInput;
};

export type MenuDishCreateOrConnectWithoutDishInput = {
  create: MenuDishCreateWithoutDishInput;
  where: MenuDishWhereUniqueInput;
};

export type MenuDishCreateWithoutDailyMenuInput = {
  dish: DishCreateNestedOneWithoutMenuDishesInput;
  quantity: Scalars['Float']['input'];
};

export type MenuDishCreateWithoutDishInput = {
  dailyMenu: DailyMenuCreateNestedOneWithoutMenuDishesInput;
  quantity: Scalars['Float']['input'];
};

export type MenuDishDailyMenuIdDishIdCompoundUniqueInput = {
  dailyMenuId: Scalars['Int']['input'];
  dishId: Scalars['Int']['input'];
};

export type MenuDishGroupBy = {
  __typename?: 'MenuDishGroupBy';
  _avg?: Maybe<MenuDishAvgAggregate>;
  _count?: Maybe<MenuDishCountAggregate>;
  _max?: Maybe<MenuDishMaxAggregate>;
  _min?: Maybe<MenuDishMinAggregate>;
  _sum?: Maybe<MenuDishSumAggregate>;
  dailyMenuId: Scalars['Int']['output'];
  dishId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  quantity: Scalars['Float']['output'];
};

export type MenuDishListRelationFilter = {
  every?: InputMaybe<MenuDishWhereInput>;
  none?: InputMaybe<MenuDishWhereInput>;
  some?: InputMaybe<MenuDishWhereInput>;
};

export type MenuDishMaxAggregate = {
  __typename?: 'MenuDishMaxAggregate';
  dailyMenuId?: Maybe<Scalars['Int']['output']>;
  dishId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

export type MenuDishMaxOrderByAggregateInput = {
  dailyMenuId?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
};

export type MenuDishMinAggregate = {
  __typename?: 'MenuDishMinAggregate';
  dailyMenuId?: Maybe<Scalars['Int']['output']>;
  dishId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

export type MenuDishMinOrderByAggregateInput = {
  dailyMenuId?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
};

export type MenuDishOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MenuDishOrderByWithAggregationInput = {
  _avg?: InputMaybe<MenuDishAvgOrderByAggregateInput>;
  _count?: InputMaybe<MenuDishCountOrderByAggregateInput>;
  _max?: InputMaybe<MenuDishMaxOrderByAggregateInput>;
  _min?: InputMaybe<MenuDishMinOrderByAggregateInput>;
  _sum?: InputMaybe<MenuDishSumOrderByAggregateInput>;
  dailyMenuId?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
};

export type MenuDishOrderByWithRelationInput = {
  dailyMenu?: InputMaybe<DailyMenuOrderByWithRelationInput>;
  dailyMenuId?: InputMaybe<SortOrder>;
  dish?: InputMaybe<DishOrderByWithRelationInput>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
};

export enum MenuDishScalarFieldEnum {
  DailyMenuId = 'dailyMenuId',
  DishId = 'dishId',
  Id = 'id',
  Quantity = 'quantity'
}

export type MenuDishScalarWhereInput = {
  AND?: InputMaybe<Array<MenuDishScalarWhereInput>>;
  NOT?: InputMaybe<Array<MenuDishScalarWhereInput>>;
  OR?: InputMaybe<Array<MenuDishScalarWhereInput>>;
  dailyMenuId?: InputMaybe<IntFilter>;
  dishId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  quantity?: InputMaybe<FloatFilter>;
};

export type MenuDishScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MenuDishScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MenuDishScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MenuDishScalarWhereWithAggregatesInput>>;
  dailyMenuId?: InputMaybe<IntWithAggregatesFilter>;
  dishId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  quantity?: InputMaybe<FloatWithAggregatesFilter>;
};

export type MenuDishSumAggregate = {
  __typename?: 'MenuDishSumAggregate';
  dailyMenuId?: Maybe<Scalars['Int']['output']>;
  dishId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

export type MenuDishSumOrderByAggregateInput = {
  dailyMenuId?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
};

export type MenuDishUpdateInput = {
  dailyMenu?: InputMaybe<DailyMenuUpdateOneRequiredWithoutMenuDishesNestedInput>;
  dish?: InputMaybe<DishUpdateOneRequiredWithoutMenuDishesNestedInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type MenuDishUpdateManyMutationInput = {
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type MenuDishUpdateManyWithWhereWithoutDailyMenuInput = {
  data: MenuDishUpdateManyMutationInput;
  where: MenuDishScalarWhereInput;
};

export type MenuDishUpdateManyWithWhereWithoutDishInput = {
  data: MenuDishUpdateManyMutationInput;
  where: MenuDishScalarWhereInput;
};

export type MenuDishUpdateManyWithoutDailyMenuNestedInput = {
  connect?: InputMaybe<Array<MenuDishWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MenuDishCreateOrConnectWithoutDailyMenuInput>>;
  create?: InputMaybe<Array<MenuDishCreateWithoutDailyMenuInput>>;
  createMany?: InputMaybe<MenuDishCreateManyDailyMenuInputEnvelope>;
  delete?: InputMaybe<Array<MenuDishWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MenuDishScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MenuDishWhereUniqueInput>>;
  set?: InputMaybe<Array<MenuDishWhereUniqueInput>>;
  update?: InputMaybe<Array<MenuDishUpdateWithWhereUniqueWithoutDailyMenuInput>>;
  updateMany?: InputMaybe<Array<MenuDishUpdateManyWithWhereWithoutDailyMenuInput>>;
  upsert?: InputMaybe<Array<MenuDishUpsertWithWhereUniqueWithoutDailyMenuInput>>;
};

export type MenuDishUpdateManyWithoutDishNestedInput = {
  connect?: InputMaybe<Array<MenuDishWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MenuDishCreateOrConnectWithoutDishInput>>;
  create?: InputMaybe<Array<MenuDishCreateWithoutDishInput>>;
  createMany?: InputMaybe<MenuDishCreateManyDishInputEnvelope>;
  delete?: InputMaybe<Array<MenuDishWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MenuDishScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MenuDishWhereUniqueInput>>;
  set?: InputMaybe<Array<MenuDishWhereUniqueInput>>;
  update?: InputMaybe<Array<MenuDishUpdateWithWhereUniqueWithoutDishInput>>;
  updateMany?: InputMaybe<Array<MenuDishUpdateManyWithWhereWithoutDishInput>>;
  upsert?: InputMaybe<Array<MenuDishUpsertWithWhereUniqueWithoutDishInput>>;
};

export type MenuDishUpdateWithWhereUniqueWithoutDailyMenuInput = {
  data: MenuDishUpdateWithoutDailyMenuInput;
  where: MenuDishWhereUniqueInput;
};

export type MenuDishUpdateWithWhereUniqueWithoutDishInput = {
  data: MenuDishUpdateWithoutDishInput;
  where: MenuDishWhereUniqueInput;
};

export type MenuDishUpdateWithoutDailyMenuInput = {
  dish?: InputMaybe<DishUpdateOneRequiredWithoutMenuDishesNestedInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type MenuDishUpdateWithoutDishInput = {
  dailyMenu?: InputMaybe<DailyMenuUpdateOneRequiredWithoutMenuDishesNestedInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type MenuDishUpsertWithWhereUniqueWithoutDailyMenuInput = {
  create: MenuDishCreateWithoutDailyMenuInput;
  update: MenuDishUpdateWithoutDailyMenuInput;
  where: MenuDishWhereUniqueInput;
};

export type MenuDishUpsertWithWhereUniqueWithoutDishInput = {
  create: MenuDishCreateWithoutDishInput;
  update: MenuDishUpdateWithoutDishInput;
  where: MenuDishWhereUniqueInput;
};

export type MenuDishWhereInput = {
  AND?: InputMaybe<Array<MenuDishWhereInput>>;
  NOT?: InputMaybe<Array<MenuDishWhereInput>>;
  OR?: InputMaybe<Array<MenuDishWhereInput>>;
  dailyMenu?: InputMaybe<DailyMenuRelationFilter>;
  dailyMenuId?: InputMaybe<IntFilter>;
  dish?: InputMaybe<DishRelationFilter>;
  dishId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  quantity?: InputMaybe<FloatFilter>;
};

export type MenuDishWhereUniqueInput = {
  AND?: InputMaybe<Array<MenuDishWhereInput>>;
  NOT?: InputMaybe<Array<MenuDishWhereInput>>;
  OR?: InputMaybe<Array<MenuDishWhereInput>>;
  dailyMenu?: InputMaybe<DailyMenuRelationFilter>;
  dailyMenuId?: InputMaybe<IntFilter>;
  dailyMenuId_dishId?: InputMaybe<MenuDishDailyMenuIdDishIdCompoundUniqueInput>;
  dish?: InputMaybe<DishRelationFilter>;
  dishId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<FloatFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyDailyMenu: AffectedRowsOutput;
  createManyDish: AffectedRowsOutput;
  createManyDishNutrient: AffectedRowsOutput;
  createManyDishProduct: AffectedRowsOutput;
  createManyMenuDish: AffectedRowsOutput;
  createManyNutrient: AffectedRowsOutput;
  createManyNutrientCategory: AffectedRowsOutput;
  createManyProduct: AffectedRowsOutput;
  createManyProductCategory: AffectedRowsOutput;
  createManyProductClearWeight: AffectedRowsOutput;
  createManyProductMeasure: AffectedRowsOutput;
  createManyProductNutrient: AffectedRowsOutput;
  createOneDailyMenu: DailyMenu;
  createOneDish: Dish;
  createOneDishNutrient: DishNutrient;
  createOneDishProduct: DishProduct;
  createOneMenuDish: MenuDish;
  createOneNutrient: Nutrient;
  createOneNutrientCategory: NutrientCategory;
  createOneProduct: Product;
  createOneProductCategory: ProductCategory;
  createOneProductClearWeight: ProductClearWeight;
  createOneProductMeasure: ProductMeasure;
  createOneProductNutrient: ProductNutrient;
  deleteManyDailyMenu: AffectedRowsOutput;
  deleteManyDish: AffectedRowsOutput;
  deleteManyDishNutrient: AffectedRowsOutput;
  deleteManyDishProduct: AffectedRowsOutput;
  deleteManyMenuDish: AffectedRowsOutput;
  deleteManyNutrient: AffectedRowsOutput;
  deleteManyNutrientCategory: AffectedRowsOutput;
  deleteManyProduct: AffectedRowsOutput;
  deleteManyProductCategory: AffectedRowsOutput;
  deleteManyProductClearWeight: AffectedRowsOutput;
  deleteManyProductMeasure: AffectedRowsOutput;
  deleteManyProductNutrient: AffectedRowsOutput;
  deleteOneDailyMenu?: Maybe<DailyMenu>;
  deleteOneDish?: Maybe<Dish>;
  deleteOneDishNutrient?: Maybe<DishNutrient>;
  deleteOneDishProduct?: Maybe<DishProduct>;
  deleteOneMenuDish?: Maybe<MenuDish>;
  deleteOneNutrient?: Maybe<Nutrient>;
  deleteOneNutrientCategory?: Maybe<NutrientCategory>;
  deleteOneProduct?: Maybe<Product>;
  deleteOneProductCategory?: Maybe<ProductCategory>;
  deleteOneProductClearWeight?: Maybe<ProductClearWeight>;
  deleteOneProductMeasure?: Maybe<ProductMeasure>;
  deleteOneProductNutrient?: Maybe<ProductNutrient>;
  updateManyDailyMenu: AffectedRowsOutput;
  updateManyDish: AffectedRowsOutput;
  updateManyDishNutrient: AffectedRowsOutput;
  updateManyDishProduct: AffectedRowsOutput;
  updateManyMenuDish: AffectedRowsOutput;
  updateManyNutrient: AffectedRowsOutput;
  updateManyNutrientCategory: AffectedRowsOutput;
  updateManyProduct: AffectedRowsOutput;
  updateManyProductCategory: AffectedRowsOutput;
  updateManyProductClearWeight: AffectedRowsOutput;
  updateManyProductMeasure: AffectedRowsOutput;
  updateManyProductNutrient: AffectedRowsOutput;
  updateOneDailyMenu?: Maybe<DailyMenu>;
  updateOneDish?: Maybe<Dish>;
  updateOneDishNutrient?: Maybe<DishNutrient>;
  updateOneDishProduct?: Maybe<DishProduct>;
  updateOneMenuDish?: Maybe<MenuDish>;
  updateOneNutrient?: Maybe<Nutrient>;
  updateOneNutrientCategory?: Maybe<NutrientCategory>;
  updateOneProduct?: Maybe<Product>;
  updateOneProductCategory?: Maybe<ProductCategory>;
  updateOneProductClearWeight?: Maybe<ProductClearWeight>;
  updateOneProductMeasure?: Maybe<ProductMeasure>;
  updateOneProductNutrient?: Maybe<ProductNutrient>;
  upsertOneDailyMenu: DailyMenu;
  upsertOneDish: Dish;
  upsertOneDishNutrient: DishNutrient;
  upsertOneDishProduct: DishProduct;
  upsertOneMenuDish: MenuDish;
  upsertOneNutrient: Nutrient;
  upsertOneNutrientCategory: NutrientCategory;
  upsertOneProduct: Product;
  upsertOneProductCategory: ProductCategory;
  upsertOneProductClearWeight: ProductClearWeight;
  upsertOneProductMeasure: ProductMeasure;
  upsertOneProductNutrient: ProductNutrient;
};


export type MutationCreateManyDailyMenuArgs = {
  data: Array<DailyMenuCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyDishArgs = {
  data: Array<DishCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyDishNutrientArgs = {
  data: Array<DishNutrientCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyDishProductArgs = {
  data: Array<DishProductCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMenuDishArgs = {
  data: Array<MenuDishCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyNutrientArgs = {
  data: Array<NutrientCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyNutrientCategoryArgs = {
  data: Array<NutrientCategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyProductArgs = {
  data: Array<ProductCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyProductCategoryArgs = {
  data: Array<ProductCategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyProductClearWeightArgs = {
  data: Array<ProductClearWeightCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyProductMeasureArgs = {
  data: Array<ProductMeasureCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyProductNutrientArgs = {
  data: Array<ProductNutrientCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneDailyMenuArgs = {
  data: DailyMenuCreateInput;
};


export type MutationCreateOneDishArgs = {
  data: DishCreateInput;
};


export type MutationCreateOneDishNutrientArgs = {
  data: DishNutrientCreateInput;
};


export type MutationCreateOneDishProductArgs = {
  data: DishProductCreateInput;
};


export type MutationCreateOneMenuDishArgs = {
  data: MenuDishCreateInput;
};


export type MutationCreateOneNutrientArgs = {
  data: NutrientCreateInput;
};


export type MutationCreateOneNutrientCategoryArgs = {
  data: NutrientCategoryCreateInput;
};


export type MutationCreateOneProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateOneProductCategoryArgs = {
  data: ProductCategoryCreateInput;
};


export type MutationCreateOneProductClearWeightArgs = {
  data: ProductClearWeightCreateInput;
};


export type MutationCreateOneProductMeasureArgs = {
  data: ProductMeasureCreateInput;
};


export type MutationCreateOneProductNutrientArgs = {
  data: ProductNutrientCreateInput;
};


export type MutationDeleteManyDailyMenuArgs = {
  where?: InputMaybe<DailyMenuWhereInput>;
};


export type MutationDeleteManyDishArgs = {
  where?: InputMaybe<DishWhereInput>;
};


export type MutationDeleteManyDishNutrientArgs = {
  where?: InputMaybe<DishNutrientWhereInput>;
};


export type MutationDeleteManyDishProductArgs = {
  where?: InputMaybe<DishProductWhereInput>;
};


export type MutationDeleteManyMenuDishArgs = {
  where?: InputMaybe<MenuDishWhereInput>;
};


export type MutationDeleteManyNutrientArgs = {
  where?: InputMaybe<NutrientWhereInput>;
};


export type MutationDeleteManyNutrientCategoryArgs = {
  where?: InputMaybe<NutrientCategoryWhereInput>;
};


export type MutationDeleteManyProductArgs = {
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationDeleteManyProductCategoryArgs = {
  where?: InputMaybe<ProductCategoryWhereInput>;
};


export type MutationDeleteManyProductClearWeightArgs = {
  where?: InputMaybe<ProductClearWeightWhereInput>;
};


export type MutationDeleteManyProductMeasureArgs = {
  where?: InputMaybe<ProductMeasureWhereInput>;
};


export type MutationDeleteManyProductNutrientArgs = {
  where?: InputMaybe<ProductNutrientWhereInput>;
};


export type MutationDeleteOneDailyMenuArgs = {
  where: DailyMenuWhereUniqueInput;
};


export type MutationDeleteOneDishArgs = {
  where: DishWhereUniqueInput;
};


export type MutationDeleteOneDishNutrientArgs = {
  where: DishNutrientWhereUniqueInput;
};


export type MutationDeleteOneDishProductArgs = {
  where: DishProductWhereUniqueInput;
};


export type MutationDeleteOneMenuDishArgs = {
  where: MenuDishWhereUniqueInput;
};


export type MutationDeleteOneNutrientArgs = {
  where: NutrientWhereUniqueInput;
};


export type MutationDeleteOneNutrientCategoryArgs = {
  where: NutrientCategoryWhereUniqueInput;
};


export type MutationDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteOneProductCategoryArgs = {
  where: ProductCategoryWhereUniqueInput;
};


export type MutationDeleteOneProductClearWeightArgs = {
  where: ProductClearWeightWhereUniqueInput;
};


export type MutationDeleteOneProductMeasureArgs = {
  where: ProductMeasureWhereUniqueInput;
};


export type MutationDeleteOneProductNutrientArgs = {
  where: ProductNutrientWhereUniqueInput;
};


export type MutationUpdateManyDailyMenuArgs = {
  data: DailyMenuUpdateManyMutationInput;
  where?: InputMaybe<DailyMenuWhereInput>;
};


export type MutationUpdateManyDishArgs = {
  data: DishUpdateManyMutationInput;
  where?: InputMaybe<DishWhereInput>;
};


export type MutationUpdateManyDishNutrientArgs = {
  data: DishNutrientUpdateManyMutationInput;
  where?: InputMaybe<DishNutrientWhereInput>;
};


export type MutationUpdateManyDishProductArgs = {
  data: DishProductUpdateManyMutationInput;
  where?: InputMaybe<DishProductWhereInput>;
};


export type MutationUpdateManyMenuDishArgs = {
  data: MenuDishUpdateManyMutationInput;
  where?: InputMaybe<MenuDishWhereInput>;
};


export type MutationUpdateManyNutrientArgs = {
  data: NutrientUpdateManyMutationInput;
  where?: InputMaybe<NutrientWhereInput>;
};


export type MutationUpdateManyNutrientCategoryArgs = {
  data: NutrientCategoryUpdateManyMutationInput;
  where?: InputMaybe<NutrientCategoryWhereInput>;
};


export type MutationUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationUpdateManyProductCategoryArgs = {
  data: ProductCategoryUpdateManyMutationInput;
  where?: InputMaybe<ProductCategoryWhereInput>;
};


export type MutationUpdateManyProductClearWeightArgs = {
  data: ProductClearWeightUpdateManyMutationInput;
  where?: InputMaybe<ProductClearWeightWhereInput>;
};


export type MutationUpdateManyProductMeasureArgs = {
  data: ProductMeasureUpdateManyMutationInput;
  where?: InputMaybe<ProductMeasureWhereInput>;
};


export type MutationUpdateManyProductNutrientArgs = {
  data: ProductNutrientUpdateManyMutationInput;
  where?: InputMaybe<ProductNutrientWhereInput>;
};


export type MutationUpdateOneDailyMenuArgs = {
  data: DailyMenuUpdateInput;
  where: DailyMenuWhereUniqueInput;
};


export type MutationUpdateOneDishArgs = {
  data: DishUpdateInput;
  where: DishWhereUniqueInput;
};


export type MutationUpdateOneDishNutrientArgs = {
  data: DishNutrientUpdateInput;
  where: DishNutrientWhereUniqueInput;
};


export type MutationUpdateOneDishProductArgs = {
  data: DishProductUpdateInput;
  where: DishProductWhereUniqueInput;
};


export type MutationUpdateOneMenuDishArgs = {
  data: MenuDishUpdateInput;
  where: MenuDishWhereUniqueInput;
};


export type MutationUpdateOneNutrientArgs = {
  data: NutrientUpdateInput;
  where: NutrientWhereUniqueInput;
};


export type MutationUpdateOneNutrientCategoryArgs = {
  data: NutrientCategoryUpdateInput;
  where: NutrientCategoryWhereUniqueInput;
};


export type MutationUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateOneProductCategoryArgs = {
  data: ProductCategoryUpdateInput;
  where: ProductCategoryWhereUniqueInput;
};


export type MutationUpdateOneProductClearWeightArgs = {
  data: ProductClearWeightUpdateInput;
  where: ProductClearWeightWhereUniqueInput;
};


export type MutationUpdateOneProductMeasureArgs = {
  data: ProductMeasureUpdateInput;
  where: ProductMeasureWhereUniqueInput;
};


export type MutationUpdateOneProductNutrientArgs = {
  data: ProductNutrientUpdateInput;
  where: ProductNutrientWhereUniqueInput;
};


export type MutationUpsertOneDailyMenuArgs = {
  create: DailyMenuCreateInput;
  update: DailyMenuUpdateInput;
  where: DailyMenuWhereUniqueInput;
};


export type MutationUpsertOneDishArgs = {
  create: DishCreateInput;
  update: DishUpdateInput;
  where: DishWhereUniqueInput;
};


export type MutationUpsertOneDishNutrientArgs = {
  create: DishNutrientCreateInput;
  update: DishNutrientUpdateInput;
  where: DishNutrientWhereUniqueInput;
};


export type MutationUpsertOneDishProductArgs = {
  create: DishProductCreateInput;
  update: DishProductUpdateInput;
  where: DishProductWhereUniqueInput;
};


export type MutationUpsertOneMenuDishArgs = {
  create: MenuDishCreateInput;
  update: MenuDishUpdateInput;
  where: MenuDishWhereUniqueInput;
};


export type MutationUpsertOneNutrientArgs = {
  create: NutrientCreateInput;
  update: NutrientUpdateInput;
  where: NutrientWhereUniqueInput;
};


export type MutationUpsertOneNutrientCategoryArgs = {
  create: NutrientCategoryCreateInput;
  update: NutrientCategoryUpdateInput;
  where: NutrientCategoryWhereUniqueInput;
};


export type MutationUpsertOneProductArgs = {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertOneProductCategoryArgs = {
  create: ProductCategoryCreateInput;
  update: ProductCategoryUpdateInput;
  where: ProductCategoryWhereUniqueInput;
};


export type MutationUpsertOneProductClearWeightArgs = {
  create: ProductClearWeightCreateInput;
  update: ProductClearWeightUpdateInput;
  where: ProductClearWeightWhereUniqueInput;
};


export type MutationUpsertOneProductMeasureArgs = {
  create: ProductMeasureCreateInput;
  update: ProductMeasureUpdateInput;
  where: ProductMeasureWhereUniqueInput;
};


export type MutationUpsertOneProductNutrientArgs = {
  create: ProductNutrientCreateInput;
  update: ProductNutrientUpdateInput;
  where: ProductNutrientWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedEnumMealTypeFilter = {
  equals?: InputMaybe<MealType>;
  in?: InputMaybe<Array<MealType>>;
  not?: InputMaybe<NestedEnumMealTypeFilter>;
  notIn?: InputMaybe<Array<MealType>>;
};

export type NestedEnumMealTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumMealTypeFilter>;
  _min?: InputMaybe<NestedEnumMealTypeFilter>;
  equals?: InputMaybe<MealType>;
  in?: InputMaybe<Array<MealType>>;
  not?: InputMaybe<NestedEnumMealTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<MealType>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Nutrient = {
  __typename?: 'Nutrient';
  _count?: Maybe<NutrientCount>;
  categoryId: Scalars['Int']['output'];
  dishNutrients: Array<DishNutrient>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nutrientCategory: NutrientCategory;
  productNutrients: Array<ProductNutrient>;
};


export type NutrientDishNutrientsArgs = {
  cursor?: InputMaybe<DishNutrientWhereUniqueInput>;
  distinct?: InputMaybe<Array<DishNutrientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DishNutrientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishNutrientWhereInput>;
};


export type NutrientProductNutrientsArgs = {
  cursor?: InputMaybe<ProductNutrientWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductNutrientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductNutrientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductNutrientWhereInput>;
};

export type NutrientAvgAggregate = {
  __typename?: 'NutrientAvgAggregate';
  categoryId?: Maybe<Scalars['Float']['output']>;
};

export type NutrientAvgOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
};

export type NutrientCategory = {
  __typename?: 'NutrientCategory';
  _count?: Maybe<NutrientCategoryCount>;
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  nutrients: Array<Nutrient>;
};


export type NutrientCategoryNutrientsArgs = {
  cursor?: InputMaybe<NutrientWhereUniqueInput>;
  distinct?: InputMaybe<Array<NutrientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NutrientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NutrientWhereInput>;
};

export type NutrientCategoryAvgAggregate = {
  __typename?: 'NutrientCategoryAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type NutrientCategoryAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NutrientCategoryCount = {
  __typename?: 'NutrientCategoryCount';
  nutrients: Scalars['Int']['output'];
};


export type NutrientCategoryCountNutrientsArgs = {
  where?: InputMaybe<NutrientWhereInput>;
};

export type NutrientCategoryCountAggregate = {
  __typename?: 'NutrientCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  desc: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type NutrientCategoryCountOrderByAggregateInput = {
  desc?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type NutrientCategoryCreateInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nutrients?: InputMaybe<NutrientCreateNestedManyWithoutNutrientCategoryInput>;
};

export type NutrientCategoryCreateManyInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type NutrientCategoryCreateNestedOneWithoutNutrientsInput = {
  connect?: InputMaybe<NutrientCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NutrientCategoryCreateOrConnectWithoutNutrientsInput>;
  create?: InputMaybe<NutrientCategoryCreateWithoutNutrientsInput>;
};

export type NutrientCategoryCreateOrConnectWithoutNutrientsInput = {
  create: NutrientCategoryCreateWithoutNutrientsInput;
  where: NutrientCategoryWhereUniqueInput;
};

export type NutrientCategoryCreateWithoutNutrientsInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type NutrientCategoryGroupBy = {
  __typename?: 'NutrientCategoryGroupBy';
  _avg?: Maybe<NutrientCategoryAvgAggregate>;
  _count?: Maybe<NutrientCategoryCountAggregate>;
  _max?: Maybe<NutrientCategoryMaxAggregate>;
  _min?: Maybe<NutrientCategoryMinAggregate>;
  _sum?: Maybe<NutrientCategorySumAggregate>;
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type NutrientCategoryMaxAggregate = {
  __typename?: 'NutrientCategoryMaxAggregate';
  desc?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type NutrientCategoryMaxOrderByAggregateInput = {
  desc?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type NutrientCategoryMinAggregate = {
  __typename?: 'NutrientCategoryMinAggregate';
  desc?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type NutrientCategoryMinOrderByAggregateInput = {
  desc?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type NutrientCategoryOrderByWithAggregationInput = {
  _avg?: InputMaybe<NutrientCategoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<NutrientCategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<NutrientCategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<NutrientCategoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<NutrientCategorySumOrderByAggregateInput>;
  desc?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type NutrientCategoryOrderByWithRelationInput = {
  desc?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nutrients?: InputMaybe<NutrientOrderByRelationAggregateInput>;
};

export type NutrientCategoryRelationFilter = {
  is?: InputMaybe<NutrientCategoryWhereInput>;
  isNot?: InputMaybe<NutrientCategoryWhereInput>;
};

export enum NutrientCategoryScalarFieldEnum {
  Desc = 'desc',
  Id = 'id',
  Name = 'name'
}

export type NutrientCategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NutrientCategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NutrientCategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NutrientCategoryScalarWhereWithAggregatesInput>>;
  desc?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type NutrientCategorySumAggregate = {
  __typename?: 'NutrientCategorySumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type NutrientCategorySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NutrientCategoryUpdateInput = {
  desc?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nutrients?: InputMaybe<NutrientUpdateManyWithoutNutrientCategoryNestedInput>;
};

export type NutrientCategoryUpdateManyMutationInput = {
  desc?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NutrientCategoryUpdateOneRequiredWithoutNutrientsNestedInput = {
  connect?: InputMaybe<NutrientCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NutrientCategoryCreateOrConnectWithoutNutrientsInput>;
  create?: InputMaybe<NutrientCategoryCreateWithoutNutrientsInput>;
  update?: InputMaybe<NutrientCategoryUpdateToOneWithWhereWithoutNutrientsInput>;
  upsert?: InputMaybe<NutrientCategoryUpsertWithoutNutrientsInput>;
};

export type NutrientCategoryUpdateToOneWithWhereWithoutNutrientsInput = {
  data: NutrientCategoryUpdateWithoutNutrientsInput;
  where?: InputMaybe<NutrientCategoryWhereInput>;
};

export type NutrientCategoryUpdateWithoutNutrientsInput = {
  desc?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NutrientCategoryUpsertWithoutNutrientsInput = {
  create: NutrientCategoryCreateWithoutNutrientsInput;
  update: NutrientCategoryUpdateWithoutNutrientsInput;
  where?: InputMaybe<NutrientCategoryWhereInput>;
};

export type NutrientCategoryWhereInput = {
  AND?: InputMaybe<Array<NutrientCategoryWhereInput>>;
  NOT?: InputMaybe<Array<NutrientCategoryWhereInput>>;
  OR?: InputMaybe<Array<NutrientCategoryWhereInput>>;
  desc?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  nutrients?: InputMaybe<NutrientListRelationFilter>;
};

export type NutrientCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<NutrientCategoryWhereInput>>;
  NOT?: InputMaybe<Array<NutrientCategoryWhereInput>>;
  OR?: InputMaybe<Array<NutrientCategoryWhereInput>>;
  desc?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringFilter>;
  nutrients?: InputMaybe<NutrientListRelationFilter>;
};

export type NutrientCount = {
  __typename?: 'NutrientCount';
  dishNutrients: Scalars['Int']['output'];
  productNutrients: Scalars['Int']['output'];
};


export type NutrientCountDishNutrientsArgs = {
  where?: InputMaybe<DishNutrientWhereInput>;
};


export type NutrientCountProductNutrientsArgs = {
  where?: InputMaybe<ProductNutrientWhereInput>;
};

export type NutrientCountAggregate = {
  __typename?: 'NutrientCountAggregate';
  _all: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type NutrientCountOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type NutrientCreateInput = {
  dishNutrients?: InputMaybe<DishNutrientCreateNestedManyWithoutNutrientInput>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  nutrientCategory: NutrientCategoryCreateNestedOneWithoutNutrientsInput;
  productNutrients?: InputMaybe<ProductNutrientCreateNestedManyWithoutNutrientInput>;
};

export type NutrientCreateManyInput = {
  categoryId: Scalars['Int']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type NutrientCreateManyNutrientCategoryInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type NutrientCreateManyNutrientCategoryInputEnvelope = {
  data: Array<NutrientCreateManyNutrientCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NutrientCreateNestedManyWithoutNutrientCategoryInput = {
  connect?: InputMaybe<Array<NutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NutrientCreateOrConnectWithoutNutrientCategoryInput>>;
  create?: InputMaybe<Array<NutrientCreateWithoutNutrientCategoryInput>>;
  createMany?: InputMaybe<NutrientCreateManyNutrientCategoryInputEnvelope>;
};

export type NutrientCreateNestedOneWithoutDishNutrientsInput = {
  connect?: InputMaybe<NutrientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NutrientCreateOrConnectWithoutDishNutrientsInput>;
  create?: InputMaybe<NutrientCreateWithoutDishNutrientsInput>;
};

export type NutrientCreateNestedOneWithoutProductNutrientsInput = {
  connect?: InputMaybe<NutrientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NutrientCreateOrConnectWithoutProductNutrientsInput>;
  create?: InputMaybe<NutrientCreateWithoutProductNutrientsInput>;
};

export type NutrientCreateOrConnectWithoutDishNutrientsInput = {
  create: NutrientCreateWithoutDishNutrientsInput;
  where: NutrientWhereUniqueInput;
};

export type NutrientCreateOrConnectWithoutNutrientCategoryInput = {
  create: NutrientCreateWithoutNutrientCategoryInput;
  where: NutrientWhereUniqueInput;
};

export type NutrientCreateOrConnectWithoutProductNutrientsInput = {
  create: NutrientCreateWithoutProductNutrientsInput;
  where: NutrientWhereUniqueInput;
};

export type NutrientCreateWithoutDishNutrientsInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  nutrientCategory: NutrientCategoryCreateNestedOneWithoutNutrientsInput;
  productNutrients?: InputMaybe<ProductNutrientCreateNestedManyWithoutNutrientInput>;
};

export type NutrientCreateWithoutNutrientCategoryInput = {
  dishNutrients?: InputMaybe<DishNutrientCreateNestedManyWithoutNutrientInput>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  productNutrients?: InputMaybe<ProductNutrientCreateNestedManyWithoutNutrientInput>;
};

export type NutrientCreateWithoutProductNutrientsInput = {
  dishNutrients?: InputMaybe<DishNutrientCreateNestedManyWithoutNutrientInput>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  nutrientCategory: NutrientCategoryCreateNestedOneWithoutNutrientsInput;
};

export type NutrientGroupBy = {
  __typename?: 'NutrientGroupBy';
  _avg?: Maybe<NutrientAvgAggregate>;
  _count?: Maybe<NutrientCountAggregate>;
  _max?: Maybe<NutrientMaxAggregate>;
  _min?: Maybe<NutrientMinAggregate>;
  _sum?: Maybe<NutrientSumAggregate>;
  categoryId: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type NutrientListRelationFilter = {
  every?: InputMaybe<NutrientWhereInput>;
  none?: InputMaybe<NutrientWhereInput>;
  some?: InputMaybe<NutrientWhereInput>;
};

export type NutrientMaxAggregate = {
  __typename?: 'NutrientMaxAggregate';
  categoryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type NutrientMaxOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type NutrientMinAggregate = {
  __typename?: 'NutrientMinAggregate';
  categoryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type NutrientMinOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type NutrientOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type NutrientOrderByWithAggregationInput = {
  _avg?: InputMaybe<NutrientAvgOrderByAggregateInput>;
  _count?: InputMaybe<NutrientCountOrderByAggregateInput>;
  _max?: InputMaybe<NutrientMaxOrderByAggregateInput>;
  _min?: InputMaybe<NutrientMinOrderByAggregateInput>;
  _sum?: InputMaybe<NutrientSumOrderByAggregateInput>;
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type NutrientOrderByWithRelationInput = {
  categoryId?: InputMaybe<SortOrder>;
  dishNutrients?: InputMaybe<DishNutrientOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nutrientCategory?: InputMaybe<NutrientCategoryOrderByWithRelationInput>;
  productNutrients?: InputMaybe<ProductNutrientOrderByRelationAggregateInput>;
};

export type NutrientRelationFilter = {
  is?: InputMaybe<NutrientWhereInput>;
  isNot?: InputMaybe<NutrientWhereInput>;
};

export enum NutrientScalarFieldEnum {
  CategoryId = 'categoryId',
  Id = 'id',
  Name = 'name'
}

export type NutrientScalarWhereInput = {
  AND?: InputMaybe<Array<NutrientScalarWhereInput>>;
  NOT?: InputMaybe<Array<NutrientScalarWhereInput>>;
  OR?: InputMaybe<Array<NutrientScalarWhereInput>>;
  categoryId?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type NutrientScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NutrientScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NutrientScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NutrientScalarWhereWithAggregatesInput>>;
  categoryId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type NutrientSumAggregate = {
  __typename?: 'NutrientSumAggregate';
  categoryId?: Maybe<Scalars['Int']['output']>;
};

export type NutrientSumOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
};

export type NutrientUpdateInput = {
  dishNutrients?: InputMaybe<DishNutrientUpdateManyWithoutNutrientNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nutrientCategory?: InputMaybe<NutrientCategoryUpdateOneRequiredWithoutNutrientsNestedInput>;
  productNutrients?: InputMaybe<ProductNutrientUpdateManyWithoutNutrientNestedInput>;
};

export type NutrientUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NutrientUpdateManyWithWhereWithoutNutrientCategoryInput = {
  data: NutrientUpdateManyMutationInput;
  where: NutrientScalarWhereInput;
};

export type NutrientUpdateManyWithoutNutrientCategoryNestedInput = {
  connect?: InputMaybe<Array<NutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NutrientCreateOrConnectWithoutNutrientCategoryInput>>;
  create?: InputMaybe<Array<NutrientCreateWithoutNutrientCategoryInput>>;
  createMany?: InputMaybe<NutrientCreateManyNutrientCategoryInputEnvelope>;
  delete?: InputMaybe<Array<NutrientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NutrientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NutrientWhereUniqueInput>>;
  set?: InputMaybe<Array<NutrientWhereUniqueInput>>;
  update?: InputMaybe<Array<NutrientUpdateWithWhereUniqueWithoutNutrientCategoryInput>>;
  updateMany?: InputMaybe<Array<NutrientUpdateManyWithWhereWithoutNutrientCategoryInput>>;
  upsert?: InputMaybe<Array<NutrientUpsertWithWhereUniqueWithoutNutrientCategoryInput>>;
};

export type NutrientUpdateOneRequiredWithoutDishNutrientsNestedInput = {
  connect?: InputMaybe<NutrientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NutrientCreateOrConnectWithoutDishNutrientsInput>;
  create?: InputMaybe<NutrientCreateWithoutDishNutrientsInput>;
  update?: InputMaybe<NutrientUpdateToOneWithWhereWithoutDishNutrientsInput>;
  upsert?: InputMaybe<NutrientUpsertWithoutDishNutrientsInput>;
};

export type NutrientUpdateOneRequiredWithoutProductNutrientsNestedInput = {
  connect?: InputMaybe<NutrientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NutrientCreateOrConnectWithoutProductNutrientsInput>;
  create?: InputMaybe<NutrientCreateWithoutProductNutrientsInput>;
  update?: InputMaybe<NutrientUpdateToOneWithWhereWithoutProductNutrientsInput>;
  upsert?: InputMaybe<NutrientUpsertWithoutProductNutrientsInput>;
};

export type NutrientUpdateToOneWithWhereWithoutDishNutrientsInput = {
  data: NutrientUpdateWithoutDishNutrientsInput;
  where?: InputMaybe<NutrientWhereInput>;
};

export type NutrientUpdateToOneWithWhereWithoutProductNutrientsInput = {
  data: NutrientUpdateWithoutProductNutrientsInput;
  where?: InputMaybe<NutrientWhereInput>;
};

export type NutrientUpdateWithWhereUniqueWithoutNutrientCategoryInput = {
  data: NutrientUpdateWithoutNutrientCategoryInput;
  where: NutrientWhereUniqueInput;
};

export type NutrientUpdateWithoutDishNutrientsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nutrientCategory?: InputMaybe<NutrientCategoryUpdateOneRequiredWithoutNutrientsNestedInput>;
  productNutrients?: InputMaybe<ProductNutrientUpdateManyWithoutNutrientNestedInput>;
};

export type NutrientUpdateWithoutNutrientCategoryInput = {
  dishNutrients?: InputMaybe<DishNutrientUpdateManyWithoutNutrientNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  productNutrients?: InputMaybe<ProductNutrientUpdateManyWithoutNutrientNestedInput>;
};

export type NutrientUpdateWithoutProductNutrientsInput = {
  dishNutrients?: InputMaybe<DishNutrientUpdateManyWithoutNutrientNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nutrientCategory?: InputMaybe<NutrientCategoryUpdateOneRequiredWithoutNutrientsNestedInput>;
};

export type NutrientUpsertWithWhereUniqueWithoutNutrientCategoryInput = {
  create: NutrientCreateWithoutNutrientCategoryInput;
  update: NutrientUpdateWithoutNutrientCategoryInput;
  where: NutrientWhereUniqueInput;
};

export type NutrientUpsertWithoutDishNutrientsInput = {
  create: NutrientCreateWithoutDishNutrientsInput;
  update: NutrientUpdateWithoutDishNutrientsInput;
  where?: InputMaybe<NutrientWhereInput>;
};

export type NutrientUpsertWithoutProductNutrientsInput = {
  create: NutrientCreateWithoutProductNutrientsInput;
  update: NutrientUpdateWithoutProductNutrientsInput;
  where?: InputMaybe<NutrientWhereInput>;
};

export type NutrientWhereInput = {
  AND?: InputMaybe<Array<NutrientWhereInput>>;
  NOT?: InputMaybe<Array<NutrientWhereInput>>;
  OR?: InputMaybe<Array<NutrientWhereInput>>;
  categoryId?: InputMaybe<IntFilter>;
  dishNutrients?: InputMaybe<DishNutrientListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nutrientCategory?: InputMaybe<NutrientCategoryRelationFilter>;
  productNutrients?: InputMaybe<ProductNutrientListRelationFilter>;
};

export type NutrientWhereUniqueInput = {
  AND?: InputMaybe<Array<NutrientWhereInput>>;
  NOT?: InputMaybe<Array<NutrientWhereInput>>;
  OR?: InputMaybe<Array<NutrientWhereInput>>;
  categoryId?: InputMaybe<IntFilter>;
  dishNutrients?: InputMaybe<DishNutrientListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  nutrientCategory?: InputMaybe<NutrientCategoryRelationFilter>;
  productNutrients?: InputMaybe<ProductNutrientListRelationFilter>;
};

export type Product = {
  __typename?: 'Product';
  _count?: Maybe<ProductCount>;
  categoryId: Scalars['Int']['output'];
  dishProducts: Array<DishProduct>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  productCategory: ProductCategory;
  productClearWeights: Array<ProductClearWeight>;
  productMeasures: Array<ProductMeasure>;
  productNutrients: Array<ProductNutrient>;
};


export type ProductDishProductsArgs = {
  cursor?: InputMaybe<DishProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<DishProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DishProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishProductWhereInput>;
};


export type ProductProductClearWeightsArgs = {
  cursor?: InputMaybe<ProductClearWeightWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductClearWeightScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductClearWeightOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductClearWeightWhereInput>;
};


export type ProductProductMeasuresArgs = {
  cursor?: InputMaybe<ProductMeasureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductMeasureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductMeasureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductMeasureWhereInput>;
};


export type ProductProductNutrientsArgs = {
  cursor?: InputMaybe<ProductNutrientWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductNutrientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductNutrientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductNutrientWhereInput>;
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  categoryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type ProductAvgOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  _count?: Maybe<ProductCategoryCount>;
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
};


export type ProductCategoryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductCategoryAvgAggregate = {
  __typename?: 'ProductCategoryAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type ProductCategoryAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ProductCategoryCount = {
  __typename?: 'ProductCategoryCount';
  products: Scalars['Int']['output'];
};


export type ProductCategoryCountProductsArgs = {
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductCategoryCountAggregate = {
  __typename?: 'ProductCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  desc: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type ProductCategoryCountOrderByAggregateInput = {
  desc?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ProductCategoryCreateInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutProductCategoryInput>;
};

export type ProductCategoryCreateManyInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type ProductCategoryCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<ProductCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCategoryCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<ProductCategoryCreateWithoutProductsInput>;
};

export type ProductCategoryCreateOrConnectWithoutProductsInput = {
  create: ProductCategoryCreateWithoutProductsInput;
  where: ProductCategoryWhereUniqueInput;
};

export type ProductCategoryCreateWithoutProductsInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type ProductCategoryGroupBy = {
  __typename?: 'ProductCategoryGroupBy';
  _avg?: Maybe<ProductCategoryAvgAggregate>;
  _count?: Maybe<ProductCategoryCountAggregate>;
  _max?: Maybe<ProductCategoryMaxAggregate>;
  _min?: Maybe<ProductCategoryMinAggregate>;
  _sum?: Maybe<ProductCategorySumAggregate>;
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type ProductCategoryMaxAggregate = {
  __typename?: 'ProductCategoryMaxAggregate';
  desc?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ProductCategoryMaxOrderByAggregateInput = {
  desc?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ProductCategoryMinAggregate = {
  __typename?: 'ProductCategoryMinAggregate';
  desc?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ProductCategoryMinOrderByAggregateInput = {
  desc?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ProductCategoryOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProductCategoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProductCategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductCategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductCategoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProductCategorySumOrderByAggregateInput>;
  desc?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ProductCategoryOrderByWithRelationInput = {
  desc?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<ProductOrderByRelationAggregateInput>;
};

export type ProductCategoryRelationFilter = {
  is?: InputMaybe<ProductCategoryWhereInput>;
  isNot?: InputMaybe<ProductCategoryWhereInput>;
};

export enum ProductCategoryScalarFieldEnum {
  Desc = 'desc',
  Id = 'id',
  Name = 'name'
}

export type ProductCategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProductCategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductCategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductCategoryScalarWhereWithAggregatesInput>>;
  desc?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type ProductCategorySumAggregate = {
  __typename?: 'ProductCategorySumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type ProductCategorySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ProductCategoryUpdateInput = {
  desc?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutProductCategoryNestedInput>;
};

export type ProductCategoryUpdateManyMutationInput = {
  desc?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProductCategoryUpdateOneRequiredWithoutProductsNestedInput = {
  connect?: InputMaybe<ProductCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCategoryCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<ProductCategoryCreateWithoutProductsInput>;
  update?: InputMaybe<ProductCategoryUpdateToOneWithWhereWithoutProductsInput>;
  upsert?: InputMaybe<ProductCategoryUpsertWithoutProductsInput>;
};

export type ProductCategoryUpdateToOneWithWhereWithoutProductsInput = {
  data: ProductCategoryUpdateWithoutProductsInput;
  where?: InputMaybe<ProductCategoryWhereInput>;
};

export type ProductCategoryUpdateWithoutProductsInput = {
  desc?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProductCategoryUpsertWithoutProductsInput = {
  create: ProductCategoryCreateWithoutProductsInput;
  update: ProductCategoryUpdateWithoutProductsInput;
  where?: InputMaybe<ProductCategoryWhereInput>;
};

export type ProductCategoryWhereInput = {
  AND?: InputMaybe<Array<ProductCategoryWhereInput>>;
  NOT?: InputMaybe<Array<ProductCategoryWhereInput>>;
  OR?: InputMaybe<Array<ProductCategoryWhereInput>>;
  desc?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
};

export type ProductCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<ProductCategoryWhereInput>>;
  NOT?: InputMaybe<Array<ProductCategoryWhereInput>>;
  OR?: InputMaybe<Array<ProductCategoryWhereInput>>;
  desc?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
};

export type ProductClearWeight = {
  __typename?: 'ProductClearWeight';
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  product: Product;
  productId: Scalars['Int']['output'];
  value: Scalars['Float']['output'];
};

export type ProductClearWeightAvgAggregate = {
  __typename?: 'ProductClearWeightAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  productId?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type ProductClearWeightAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ProductClearWeightCountAggregate = {
  __typename?: 'ProductClearWeightCountAggregate';
  _all: Scalars['Int']['output'];
  desc: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type ProductClearWeightCountOrderByAggregateInput = {
  desc?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ProductClearWeightCreateInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutProductClearWeightsInput;
  value: Scalars['Float']['input'];
};

export type ProductClearWeightCreateManyInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  productId: Scalars['Int']['input'];
  value: Scalars['Float']['input'];
};

export type ProductClearWeightCreateManyProductInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  value: Scalars['Float']['input'];
};

export type ProductClearWeightCreateManyProductInputEnvelope = {
  data: Array<ProductClearWeightCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductClearWeightCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<ProductClearWeightWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductClearWeightCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductClearWeightCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductClearWeightCreateManyProductInputEnvelope>;
};

export type ProductClearWeightCreateOrConnectWithoutProductInput = {
  create: ProductClearWeightCreateWithoutProductInput;
  where: ProductClearWeightWhereUniqueInput;
};

export type ProductClearWeightCreateWithoutProductInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['Float']['input'];
};

export type ProductClearWeightGroupBy = {
  __typename?: 'ProductClearWeightGroupBy';
  _avg?: Maybe<ProductClearWeightAvgAggregate>;
  _count?: Maybe<ProductClearWeightCountAggregate>;
  _max?: Maybe<ProductClearWeightMaxAggregate>;
  _min?: Maybe<ProductClearWeightMinAggregate>;
  _sum?: Maybe<ProductClearWeightSumAggregate>;
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
  value: Scalars['Float']['output'];
};

export type ProductClearWeightListRelationFilter = {
  every?: InputMaybe<ProductClearWeightWhereInput>;
  none?: InputMaybe<ProductClearWeightWhereInput>;
  some?: InputMaybe<ProductClearWeightWhereInput>;
};

export type ProductClearWeightMaxAggregate = {
  __typename?: 'ProductClearWeightMaxAggregate';
  desc?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type ProductClearWeightMaxOrderByAggregateInput = {
  desc?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ProductClearWeightMinAggregate = {
  __typename?: 'ProductClearWeightMinAggregate';
  desc?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type ProductClearWeightMinOrderByAggregateInput = {
  desc?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ProductClearWeightOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductClearWeightOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProductClearWeightAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProductClearWeightCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductClearWeightMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductClearWeightMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProductClearWeightSumOrderByAggregateInput>;
  desc?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ProductClearWeightOrderByWithRelationInput = {
  desc?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum ProductClearWeightScalarFieldEnum {
  Desc = 'desc',
  Id = 'id',
  ProductId = 'productId',
  Value = 'value'
}

export type ProductClearWeightScalarWhereInput = {
  AND?: InputMaybe<Array<ProductClearWeightScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductClearWeightScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductClearWeightScalarWhereInput>>;
  desc?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  productId?: InputMaybe<IntFilter>;
  value?: InputMaybe<FloatFilter>;
};

export type ProductClearWeightScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProductClearWeightScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductClearWeightScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductClearWeightScalarWhereWithAggregatesInput>>;
  desc?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  productId?: InputMaybe<IntWithAggregatesFilter>;
  value?: InputMaybe<FloatWithAggregatesFilter>;
};

export type ProductClearWeightSumAggregate = {
  __typename?: 'ProductClearWeightSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type ProductClearWeightSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ProductClearWeightUpdateInput = {
  desc?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutProductClearWeightsNestedInput>;
  value?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type ProductClearWeightUpdateManyMutationInput = {
  desc?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  value?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type ProductClearWeightUpdateManyWithWhereWithoutProductInput = {
  data: ProductClearWeightUpdateManyMutationInput;
  where: ProductClearWeightScalarWhereInput;
};

export type ProductClearWeightUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<ProductClearWeightWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductClearWeightCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductClearWeightCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductClearWeightCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<ProductClearWeightWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductClearWeightScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductClearWeightWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductClearWeightWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductClearWeightUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<ProductClearWeightUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<ProductClearWeightUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ProductClearWeightUpdateWithWhereUniqueWithoutProductInput = {
  data: ProductClearWeightUpdateWithoutProductInput;
  where: ProductClearWeightWhereUniqueInput;
};

export type ProductClearWeightUpdateWithoutProductInput = {
  desc?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  value?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type ProductClearWeightUpsertWithWhereUniqueWithoutProductInput = {
  create: ProductClearWeightCreateWithoutProductInput;
  update: ProductClearWeightUpdateWithoutProductInput;
  where: ProductClearWeightWhereUniqueInput;
};

export type ProductClearWeightWhereInput = {
  AND?: InputMaybe<Array<ProductClearWeightWhereInput>>;
  NOT?: InputMaybe<Array<ProductClearWeightWhereInput>>;
  OR?: InputMaybe<Array<ProductClearWeightWhereInput>>;
  desc?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<IntFilter>;
  value?: InputMaybe<FloatFilter>;
};

export type ProductClearWeightWhereUniqueInput = {
  AND?: InputMaybe<Array<ProductClearWeightWhereInput>>;
  NOT?: InputMaybe<Array<ProductClearWeightWhereInput>>;
  OR?: InputMaybe<Array<ProductClearWeightWhereInput>>;
  desc?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<IntFilter>;
  value?: InputMaybe<FloatFilter>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  dishProducts: Scalars['Int']['output'];
  productClearWeights: Scalars['Int']['output'];
  productMeasures: Scalars['Int']['output'];
  productNutrients: Scalars['Int']['output'];
};


export type ProductCountDishProductsArgs = {
  where?: InputMaybe<DishProductWhereInput>;
};


export type ProductCountProductClearWeightsArgs = {
  where?: InputMaybe<ProductClearWeightWhereInput>;
};


export type ProductCountProductMeasuresArgs = {
  where?: InputMaybe<ProductMeasureWhereInput>;
};


export type ProductCountProductNutrientsArgs = {
  where?: InputMaybe<ProductNutrientWhereInput>;
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type ProductCountOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ProductCreateInput = {
  dishProducts?: InputMaybe<DishProductCreateNestedManyWithoutProductInput>;
  name: Scalars['String']['input'];
  productCategory: ProductCategoryCreateNestedOneWithoutProductsInput;
  productClearWeights?: InputMaybe<ProductClearWeightCreateNestedManyWithoutProductInput>;
  productMeasures?: InputMaybe<ProductMeasureCreateNestedManyWithoutProductInput>;
  productNutrients?: InputMaybe<ProductNutrientCreateNestedManyWithoutProductInput>;
};

export type ProductCreateManyInput = {
  categoryId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type ProductCreateManyProductCategoryInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type ProductCreateManyProductCategoryInputEnvelope = {
  data: Array<ProductCreateManyProductCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductCreateNestedManyWithoutProductCategoryInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutProductCategoryInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutProductCategoryInput>>;
  createMany?: InputMaybe<ProductCreateManyProductCategoryInputEnvelope>;
};

export type ProductCreateNestedOneWithoutDishProductsInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutDishProductsInput>;
  create?: InputMaybe<ProductCreateWithoutDishProductsInput>;
};

export type ProductCreateNestedOneWithoutProductClearWeightsInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductClearWeightsInput>;
  create?: InputMaybe<ProductCreateWithoutProductClearWeightsInput>;
};

export type ProductCreateNestedOneWithoutProductMeasuresInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductMeasuresInput>;
  create?: InputMaybe<ProductCreateWithoutProductMeasuresInput>;
};

export type ProductCreateNestedOneWithoutProductNutrientsInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductNutrientsInput>;
  create?: InputMaybe<ProductCreateWithoutProductNutrientsInput>;
};

export type ProductCreateOrConnectWithoutDishProductsInput = {
  create: ProductCreateWithoutDishProductsInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutProductCategoryInput = {
  create: ProductCreateWithoutProductCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutProductClearWeightsInput = {
  create: ProductCreateWithoutProductClearWeightsInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutProductMeasuresInput = {
  create: ProductCreateWithoutProductMeasuresInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutProductNutrientsInput = {
  create: ProductCreateWithoutProductNutrientsInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutDishProductsInput = {
  name: Scalars['String']['input'];
  productCategory: ProductCategoryCreateNestedOneWithoutProductsInput;
  productClearWeights?: InputMaybe<ProductClearWeightCreateNestedManyWithoutProductInput>;
  productMeasures?: InputMaybe<ProductMeasureCreateNestedManyWithoutProductInput>;
  productNutrients?: InputMaybe<ProductNutrientCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutProductCategoryInput = {
  dishProducts?: InputMaybe<DishProductCreateNestedManyWithoutProductInput>;
  name: Scalars['String']['input'];
  productClearWeights?: InputMaybe<ProductClearWeightCreateNestedManyWithoutProductInput>;
  productMeasures?: InputMaybe<ProductMeasureCreateNestedManyWithoutProductInput>;
  productNutrients?: InputMaybe<ProductNutrientCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutProductClearWeightsInput = {
  dishProducts?: InputMaybe<DishProductCreateNestedManyWithoutProductInput>;
  name: Scalars['String']['input'];
  productCategory: ProductCategoryCreateNestedOneWithoutProductsInput;
  productMeasures?: InputMaybe<ProductMeasureCreateNestedManyWithoutProductInput>;
  productNutrients?: InputMaybe<ProductNutrientCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutProductMeasuresInput = {
  dishProducts?: InputMaybe<DishProductCreateNestedManyWithoutProductInput>;
  name: Scalars['String']['input'];
  productCategory: ProductCategoryCreateNestedOneWithoutProductsInput;
  productClearWeights?: InputMaybe<ProductClearWeightCreateNestedManyWithoutProductInput>;
  productNutrients?: InputMaybe<ProductNutrientCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutProductNutrientsInput = {
  dishProducts?: InputMaybe<DishProductCreateNestedManyWithoutProductInput>;
  name: Scalars['String']['input'];
  productCategory: ProductCategoryCreateNestedOneWithoutProductsInput;
  productClearWeights?: InputMaybe<ProductClearWeightCreateNestedManyWithoutProductInput>;
  productMeasures?: InputMaybe<ProductMeasureCreateNestedManyWithoutProductInput>;
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
  categoryId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  categoryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ProductMaxOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ProductMeasure = {
  __typename?: 'ProductMeasure';
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  product: Product;
  productId: Scalars['Int']['output'];
  value: Scalars['Float']['output'];
};

export type ProductMeasureAvgAggregate = {
  __typename?: 'ProductMeasureAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  productId?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type ProductMeasureAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ProductMeasureCountAggregate = {
  __typename?: 'ProductMeasureCountAggregate';
  _all: Scalars['Int']['output'];
  desc: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type ProductMeasureCountOrderByAggregateInput = {
  desc?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ProductMeasureCreateInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  product: ProductCreateNestedOneWithoutProductMeasuresInput;
  value: Scalars['Float']['input'];
};

export type ProductMeasureCreateManyInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  productId: Scalars['Int']['input'];
  value: Scalars['Float']['input'];
};

export type ProductMeasureCreateManyProductInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type ProductMeasureCreateManyProductInputEnvelope = {
  data: Array<ProductMeasureCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductMeasureCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<ProductMeasureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductMeasureCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductMeasureCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductMeasureCreateManyProductInputEnvelope>;
};

export type ProductMeasureCreateOrConnectWithoutProductInput = {
  create: ProductMeasureCreateWithoutProductInput;
  where: ProductMeasureWhereUniqueInput;
};

export type ProductMeasureCreateWithoutProductInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type ProductMeasureGroupBy = {
  __typename?: 'ProductMeasureGroupBy';
  _avg?: Maybe<ProductMeasureAvgAggregate>;
  _count?: Maybe<ProductMeasureCountAggregate>;
  _max?: Maybe<ProductMeasureMaxAggregate>;
  _min?: Maybe<ProductMeasureMinAggregate>;
  _sum?: Maybe<ProductMeasureSumAggregate>;
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  productId: Scalars['Int']['output'];
  value: Scalars['Float']['output'];
};

export type ProductMeasureListRelationFilter = {
  every?: InputMaybe<ProductMeasureWhereInput>;
  none?: InputMaybe<ProductMeasureWhereInput>;
  some?: InputMaybe<ProductMeasureWhereInput>;
};

export type ProductMeasureMaxAggregate = {
  __typename?: 'ProductMeasureMaxAggregate';
  desc?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type ProductMeasureMaxOrderByAggregateInput = {
  desc?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ProductMeasureMinAggregate = {
  __typename?: 'ProductMeasureMinAggregate';
  desc?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type ProductMeasureMinOrderByAggregateInput = {
  desc?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ProductMeasureOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductMeasureOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProductMeasureAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProductMeasureCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductMeasureMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductMeasureMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProductMeasureSumOrderByAggregateInput>;
  desc?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ProductMeasureOrderByWithRelationInput = {
  desc?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum ProductMeasureScalarFieldEnum {
  Desc = 'desc',
  Id = 'id',
  Name = 'name',
  ProductId = 'productId',
  Value = 'value'
}

export type ProductMeasureScalarWhereInput = {
  AND?: InputMaybe<Array<ProductMeasureScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductMeasureScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductMeasureScalarWhereInput>>;
  desc?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  productId?: InputMaybe<IntFilter>;
  value?: InputMaybe<FloatFilter>;
};

export type ProductMeasureScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProductMeasureScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductMeasureScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductMeasureScalarWhereWithAggregatesInput>>;
  desc?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  productId?: InputMaybe<IntWithAggregatesFilter>;
  value?: InputMaybe<FloatWithAggregatesFilter>;
};

export type ProductMeasureSumAggregate = {
  __typename?: 'ProductMeasureSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type ProductMeasureSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ProductMeasureUpdateInput = {
  desc?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutProductMeasuresNestedInput>;
  value?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type ProductMeasureUpdateManyMutationInput = {
  desc?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type ProductMeasureUpdateManyWithWhereWithoutProductInput = {
  data: ProductMeasureUpdateManyMutationInput;
  where: ProductMeasureScalarWhereInput;
};

export type ProductMeasureUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<ProductMeasureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductMeasureCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductMeasureCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductMeasureCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<ProductMeasureWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductMeasureScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductMeasureWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductMeasureWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductMeasureUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<ProductMeasureUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<ProductMeasureUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ProductMeasureUpdateWithWhereUniqueWithoutProductInput = {
  data: ProductMeasureUpdateWithoutProductInput;
  where: ProductMeasureWhereUniqueInput;
};

export type ProductMeasureUpdateWithoutProductInput = {
  desc?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type ProductMeasureUpsertWithWhereUniqueWithoutProductInput = {
  create: ProductMeasureCreateWithoutProductInput;
  update: ProductMeasureUpdateWithoutProductInput;
  where: ProductMeasureWhereUniqueInput;
};

export type ProductMeasureWhereInput = {
  AND?: InputMaybe<Array<ProductMeasureWhereInput>>;
  NOT?: InputMaybe<Array<ProductMeasureWhereInput>>;
  OR?: InputMaybe<Array<ProductMeasureWhereInput>>;
  desc?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<IntFilter>;
  value?: InputMaybe<FloatFilter>;
};

export type ProductMeasureWhereUniqueInput = {
  AND?: InputMaybe<Array<ProductMeasureWhereInput>>;
  NOT?: InputMaybe<Array<ProductMeasureWhereInput>>;
  OR?: InputMaybe<Array<ProductMeasureWhereInput>>;
  desc?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<IntFilter>;
  value?: InputMaybe<FloatFilter>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  categoryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ProductMinOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ProductNutrient = {
  __typename?: 'ProductNutrient';
  id: Scalars['Int']['output'];
  nutrient: Nutrient;
  nutrientId: Scalars['String']['output'];
  product: Product;
  productId: Scalars['Int']['output'];
  valueAmount: Scalars['Float']['output'];
  valueExponent: Scalars['Int']['output'];
  valueString?: Maybe<Scalars['String']['output']>;
};

export type ProductNutrientAvgAggregate = {
  __typename?: 'ProductNutrientAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  productId?: Maybe<Scalars['Float']['output']>;
  valueAmount?: Maybe<Scalars['Float']['output']>;
  valueExponent?: Maybe<Scalars['Float']['output']>;
};

export type ProductNutrientAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  valueAmount?: InputMaybe<SortOrder>;
  valueExponent?: InputMaybe<SortOrder>;
};

export type ProductNutrientCountAggregate = {
  __typename?: 'ProductNutrientCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  nutrientId: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
  valueAmount: Scalars['Int']['output'];
  valueExponent: Scalars['Int']['output'];
  valueString: Scalars['Int']['output'];
};

export type ProductNutrientCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  nutrientId?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  valueAmount?: InputMaybe<SortOrder>;
  valueExponent?: InputMaybe<SortOrder>;
  valueString?: InputMaybe<SortOrder>;
};

export type ProductNutrientCreateInput = {
  nutrient: NutrientCreateNestedOneWithoutProductNutrientsInput;
  product: ProductCreateNestedOneWithoutProductNutrientsInput;
  valueAmount: Scalars['Float']['input'];
  valueExponent: Scalars['Int']['input'];
  valueString?: InputMaybe<Scalars['String']['input']>;
};

export type ProductNutrientCreateManyInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  nutrientId: Scalars['String']['input'];
  productId: Scalars['Int']['input'];
  valueAmount: Scalars['Float']['input'];
  valueExponent: Scalars['Int']['input'];
  valueString?: InputMaybe<Scalars['String']['input']>;
};

export type ProductNutrientCreateManyNutrientInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  productId: Scalars['Int']['input'];
  valueAmount: Scalars['Float']['input'];
  valueExponent: Scalars['Int']['input'];
  valueString?: InputMaybe<Scalars['String']['input']>;
};

export type ProductNutrientCreateManyNutrientInputEnvelope = {
  data: Array<ProductNutrientCreateManyNutrientInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductNutrientCreateManyProductInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  nutrientId: Scalars['String']['input'];
  valueAmount: Scalars['Float']['input'];
  valueExponent: Scalars['Int']['input'];
  valueString?: InputMaybe<Scalars['String']['input']>;
};

export type ProductNutrientCreateManyProductInputEnvelope = {
  data: Array<ProductNutrientCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductNutrientCreateNestedManyWithoutNutrientInput = {
  connect?: InputMaybe<Array<ProductNutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductNutrientCreateOrConnectWithoutNutrientInput>>;
  create?: InputMaybe<Array<ProductNutrientCreateWithoutNutrientInput>>;
  createMany?: InputMaybe<ProductNutrientCreateManyNutrientInputEnvelope>;
};

export type ProductNutrientCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<ProductNutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductNutrientCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductNutrientCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductNutrientCreateManyProductInputEnvelope>;
};

export type ProductNutrientCreateOrConnectWithoutNutrientInput = {
  create: ProductNutrientCreateWithoutNutrientInput;
  where: ProductNutrientWhereUniqueInput;
};

export type ProductNutrientCreateOrConnectWithoutProductInput = {
  create: ProductNutrientCreateWithoutProductInput;
  where: ProductNutrientWhereUniqueInput;
};

export type ProductNutrientCreateWithoutNutrientInput = {
  product: ProductCreateNestedOneWithoutProductNutrientsInput;
  valueAmount: Scalars['Float']['input'];
  valueExponent: Scalars['Int']['input'];
  valueString?: InputMaybe<Scalars['String']['input']>;
};

export type ProductNutrientCreateWithoutProductInput = {
  nutrient: NutrientCreateNestedOneWithoutProductNutrientsInput;
  valueAmount: Scalars['Float']['input'];
  valueExponent: Scalars['Int']['input'];
  valueString?: InputMaybe<Scalars['String']['input']>;
};

export type ProductNutrientGroupBy = {
  __typename?: 'ProductNutrientGroupBy';
  _avg?: Maybe<ProductNutrientAvgAggregate>;
  _count?: Maybe<ProductNutrientCountAggregate>;
  _max?: Maybe<ProductNutrientMaxAggregate>;
  _min?: Maybe<ProductNutrientMinAggregate>;
  _sum?: Maybe<ProductNutrientSumAggregate>;
  id: Scalars['Int']['output'];
  nutrientId: Scalars['String']['output'];
  productId: Scalars['Int']['output'];
  valueAmount: Scalars['Float']['output'];
  valueExponent: Scalars['Int']['output'];
  valueString?: Maybe<Scalars['String']['output']>;
};

export type ProductNutrientListRelationFilter = {
  every?: InputMaybe<ProductNutrientWhereInput>;
  none?: InputMaybe<ProductNutrientWhereInput>;
  some?: InputMaybe<ProductNutrientWhereInput>;
};

export type ProductNutrientMaxAggregate = {
  __typename?: 'ProductNutrientMaxAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  nutrientId?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
  valueAmount?: Maybe<Scalars['Float']['output']>;
  valueExponent?: Maybe<Scalars['Int']['output']>;
  valueString?: Maybe<Scalars['String']['output']>;
};

export type ProductNutrientMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  nutrientId?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  valueAmount?: InputMaybe<SortOrder>;
  valueExponent?: InputMaybe<SortOrder>;
  valueString?: InputMaybe<SortOrder>;
};

export type ProductNutrientMinAggregate = {
  __typename?: 'ProductNutrientMinAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  nutrientId?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
  valueAmount?: Maybe<Scalars['Float']['output']>;
  valueExponent?: Maybe<Scalars['Int']['output']>;
  valueString?: Maybe<Scalars['String']['output']>;
};

export type ProductNutrientMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  nutrientId?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  valueAmount?: InputMaybe<SortOrder>;
  valueExponent?: InputMaybe<SortOrder>;
  valueString?: InputMaybe<SortOrder>;
};

export type ProductNutrientOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductNutrientOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProductNutrientAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProductNutrientCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductNutrientMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductNutrientMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProductNutrientSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  nutrientId?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  valueAmount?: InputMaybe<SortOrder>;
  valueExponent?: InputMaybe<SortOrder>;
  valueString?: InputMaybe<SortOrderInput>;
};

export type ProductNutrientOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  nutrient?: InputMaybe<NutrientOrderByWithRelationInput>;
  nutrientId?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  valueAmount?: InputMaybe<SortOrder>;
  valueExponent?: InputMaybe<SortOrder>;
  valueString?: InputMaybe<SortOrderInput>;
};

export type ProductNutrientProductIdNutrientIdCompoundUniqueInput = {
  nutrientId: Scalars['String']['input'];
  productId: Scalars['Int']['input'];
};

export enum ProductNutrientScalarFieldEnum {
  Id = 'id',
  NutrientId = 'nutrientId',
  ProductId = 'productId',
  ValueAmount = 'valueAmount',
  ValueExponent = 'valueExponent',
  ValueString = 'valueString'
}

export type ProductNutrientScalarWhereInput = {
  AND?: InputMaybe<Array<ProductNutrientScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductNutrientScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductNutrientScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  nutrientId?: InputMaybe<StringFilter>;
  productId?: InputMaybe<IntFilter>;
  valueAmount?: InputMaybe<FloatFilter>;
  valueExponent?: InputMaybe<IntFilter>;
  valueString?: InputMaybe<StringNullableFilter>;
};

export type ProductNutrientScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProductNutrientScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductNutrientScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductNutrientScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  nutrientId?: InputMaybe<StringWithAggregatesFilter>;
  productId?: InputMaybe<IntWithAggregatesFilter>;
  valueAmount?: InputMaybe<FloatWithAggregatesFilter>;
  valueExponent?: InputMaybe<IntWithAggregatesFilter>;
  valueString?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type ProductNutrientSumAggregate = {
  __typename?: 'ProductNutrientSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
  valueAmount?: Maybe<Scalars['Float']['output']>;
  valueExponent?: Maybe<Scalars['Int']['output']>;
};

export type ProductNutrientSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  valueAmount?: InputMaybe<SortOrder>;
  valueExponent?: InputMaybe<SortOrder>;
};

export type ProductNutrientUpdateInput = {
  nutrient?: InputMaybe<NutrientUpdateOneRequiredWithoutProductNutrientsNestedInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutProductNutrientsNestedInput>;
  valueAmount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  valueExponent?: InputMaybe<IntFieldUpdateOperationsInput>;
  valueString?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProductNutrientUpdateManyMutationInput = {
  valueAmount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  valueExponent?: InputMaybe<IntFieldUpdateOperationsInput>;
  valueString?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProductNutrientUpdateManyWithWhereWithoutNutrientInput = {
  data: ProductNutrientUpdateManyMutationInput;
  where: ProductNutrientScalarWhereInput;
};

export type ProductNutrientUpdateManyWithWhereWithoutProductInput = {
  data: ProductNutrientUpdateManyMutationInput;
  where: ProductNutrientScalarWhereInput;
};

export type ProductNutrientUpdateManyWithoutNutrientNestedInput = {
  connect?: InputMaybe<Array<ProductNutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductNutrientCreateOrConnectWithoutNutrientInput>>;
  create?: InputMaybe<Array<ProductNutrientCreateWithoutNutrientInput>>;
  createMany?: InputMaybe<ProductNutrientCreateManyNutrientInputEnvelope>;
  delete?: InputMaybe<Array<ProductNutrientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductNutrientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductNutrientWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductNutrientWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductNutrientUpdateWithWhereUniqueWithoutNutrientInput>>;
  updateMany?: InputMaybe<Array<ProductNutrientUpdateManyWithWhereWithoutNutrientInput>>;
  upsert?: InputMaybe<Array<ProductNutrientUpsertWithWhereUniqueWithoutNutrientInput>>;
};

export type ProductNutrientUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<ProductNutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductNutrientCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductNutrientCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductNutrientCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<ProductNutrientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductNutrientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductNutrientWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductNutrientWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductNutrientUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<ProductNutrientUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<ProductNutrientUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ProductNutrientUpdateWithWhereUniqueWithoutNutrientInput = {
  data: ProductNutrientUpdateWithoutNutrientInput;
  where: ProductNutrientWhereUniqueInput;
};

export type ProductNutrientUpdateWithWhereUniqueWithoutProductInput = {
  data: ProductNutrientUpdateWithoutProductInput;
  where: ProductNutrientWhereUniqueInput;
};

export type ProductNutrientUpdateWithoutNutrientInput = {
  product?: InputMaybe<ProductUpdateOneRequiredWithoutProductNutrientsNestedInput>;
  valueAmount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  valueExponent?: InputMaybe<IntFieldUpdateOperationsInput>;
  valueString?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProductNutrientUpdateWithoutProductInput = {
  nutrient?: InputMaybe<NutrientUpdateOneRequiredWithoutProductNutrientsNestedInput>;
  valueAmount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  valueExponent?: InputMaybe<IntFieldUpdateOperationsInput>;
  valueString?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProductNutrientUpsertWithWhereUniqueWithoutNutrientInput = {
  create: ProductNutrientCreateWithoutNutrientInput;
  update: ProductNutrientUpdateWithoutNutrientInput;
  where: ProductNutrientWhereUniqueInput;
};

export type ProductNutrientUpsertWithWhereUniqueWithoutProductInput = {
  create: ProductNutrientCreateWithoutProductInput;
  update: ProductNutrientUpdateWithoutProductInput;
  where: ProductNutrientWhereUniqueInput;
};

export type ProductNutrientWhereInput = {
  AND?: InputMaybe<Array<ProductNutrientWhereInput>>;
  NOT?: InputMaybe<Array<ProductNutrientWhereInput>>;
  OR?: InputMaybe<Array<ProductNutrientWhereInput>>;
  id?: InputMaybe<IntFilter>;
  nutrient?: InputMaybe<NutrientRelationFilter>;
  nutrientId?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<IntFilter>;
  valueAmount?: InputMaybe<FloatFilter>;
  valueExponent?: InputMaybe<IntFilter>;
  valueString?: InputMaybe<StringNullableFilter>;
};

export type ProductNutrientWhereUniqueInput = {
  AND?: InputMaybe<Array<ProductNutrientWhereInput>>;
  NOT?: InputMaybe<Array<ProductNutrientWhereInput>>;
  OR?: InputMaybe<Array<ProductNutrientWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  nutrient?: InputMaybe<NutrientRelationFilter>;
  nutrientId?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<IntFilter>;
  productId_nutrientId?: InputMaybe<ProductNutrientProductIdNutrientIdCompoundUniqueInput>;
  valueAmount?: InputMaybe<FloatFilter>;
  valueExponent?: InputMaybe<IntFilter>;
  valueString?: InputMaybe<StringNullableFilter>;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProductAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProductCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProductSumOrderByAggregateInput>;
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  categoryId?: InputMaybe<SortOrder>;
  dishProducts?: InputMaybe<DishProductOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  productCategory?: InputMaybe<ProductCategoryOrderByWithRelationInput>;
  productClearWeights?: InputMaybe<ProductClearWeightOrderByRelationAggregateInput>;
  productMeasures?: InputMaybe<ProductMeasureOrderByRelationAggregateInput>;
  productNutrients?: InputMaybe<ProductNutrientOrderByRelationAggregateInput>;
};

export type ProductRelationFilter = {
  is?: InputMaybe<ProductWhereInput>;
  isNot?: InputMaybe<ProductWhereInput>;
};

export enum ProductScalarFieldEnum {
  CategoryId = 'categoryId',
  Id = 'id',
  Name = 'name'
}

export type ProductScalarWhereInput = {
  AND?: InputMaybe<Array<ProductScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereInput>>;
  categoryId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type ProductScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  categoryId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  categoryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type ProductSumOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ProductUpdateInput = {
  dishProducts?: InputMaybe<DishProductUpdateManyWithoutProductNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  productCategory?: InputMaybe<ProductCategoryUpdateOneRequiredWithoutProductsNestedInput>;
  productClearWeights?: InputMaybe<ProductClearWeightUpdateManyWithoutProductNestedInput>;
  productMeasures?: InputMaybe<ProductMeasureUpdateManyWithoutProductNestedInput>;
  productNutrients?: InputMaybe<ProductNutrientUpdateManyWithoutProductNestedInput>;
};

export type ProductUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProductUpdateManyWithWhereWithoutProductCategoryInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithoutProductCategoryNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutProductCategoryInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutProductCategoryInput>>;
  createMany?: InputMaybe<ProductCreateManyProductCategoryInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutProductCategoryInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutProductCategoryInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutProductCategoryInput>>;
};

export type ProductUpdateOneRequiredWithoutDishProductsNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutDishProductsInput>;
  create?: InputMaybe<ProductCreateWithoutDishProductsInput>;
  update?: InputMaybe<ProductUpdateToOneWithWhereWithoutDishProductsInput>;
  upsert?: InputMaybe<ProductUpsertWithoutDishProductsInput>;
};

export type ProductUpdateOneRequiredWithoutProductClearWeightsNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductClearWeightsInput>;
  create?: InputMaybe<ProductCreateWithoutProductClearWeightsInput>;
  update?: InputMaybe<ProductUpdateToOneWithWhereWithoutProductClearWeightsInput>;
  upsert?: InputMaybe<ProductUpsertWithoutProductClearWeightsInput>;
};

export type ProductUpdateOneRequiredWithoutProductMeasuresNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductMeasuresInput>;
  create?: InputMaybe<ProductCreateWithoutProductMeasuresInput>;
  update?: InputMaybe<ProductUpdateToOneWithWhereWithoutProductMeasuresInput>;
  upsert?: InputMaybe<ProductUpsertWithoutProductMeasuresInput>;
};

export type ProductUpdateOneRequiredWithoutProductNutrientsNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductNutrientsInput>;
  create?: InputMaybe<ProductCreateWithoutProductNutrientsInput>;
  update?: InputMaybe<ProductUpdateToOneWithWhereWithoutProductNutrientsInput>;
  upsert?: InputMaybe<ProductUpsertWithoutProductNutrientsInput>;
};

export type ProductUpdateToOneWithWhereWithoutDishProductsInput = {
  data: ProductUpdateWithoutDishProductsInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpdateToOneWithWhereWithoutProductClearWeightsInput = {
  data: ProductUpdateWithoutProductClearWeightsInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpdateToOneWithWhereWithoutProductMeasuresInput = {
  data: ProductUpdateWithoutProductMeasuresInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpdateToOneWithWhereWithoutProductNutrientsInput = {
  data: ProductUpdateWithoutProductNutrientsInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpdateWithWhereUniqueWithoutProductCategoryInput = {
  data: ProductUpdateWithoutProductCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithoutDishProductsInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  productCategory?: InputMaybe<ProductCategoryUpdateOneRequiredWithoutProductsNestedInput>;
  productClearWeights?: InputMaybe<ProductClearWeightUpdateManyWithoutProductNestedInput>;
  productMeasures?: InputMaybe<ProductMeasureUpdateManyWithoutProductNestedInput>;
  productNutrients?: InputMaybe<ProductNutrientUpdateManyWithoutProductNestedInput>;
};

export type ProductUpdateWithoutProductCategoryInput = {
  dishProducts?: InputMaybe<DishProductUpdateManyWithoutProductNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  productClearWeights?: InputMaybe<ProductClearWeightUpdateManyWithoutProductNestedInput>;
  productMeasures?: InputMaybe<ProductMeasureUpdateManyWithoutProductNestedInput>;
  productNutrients?: InputMaybe<ProductNutrientUpdateManyWithoutProductNestedInput>;
};

export type ProductUpdateWithoutProductClearWeightsInput = {
  dishProducts?: InputMaybe<DishProductUpdateManyWithoutProductNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  productCategory?: InputMaybe<ProductCategoryUpdateOneRequiredWithoutProductsNestedInput>;
  productMeasures?: InputMaybe<ProductMeasureUpdateManyWithoutProductNestedInput>;
  productNutrients?: InputMaybe<ProductNutrientUpdateManyWithoutProductNestedInput>;
};

export type ProductUpdateWithoutProductMeasuresInput = {
  dishProducts?: InputMaybe<DishProductUpdateManyWithoutProductNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  productCategory?: InputMaybe<ProductCategoryUpdateOneRequiredWithoutProductsNestedInput>;
  productClearWeights?: InputMaybe<ProductClearWeightUpdateManyWithoutProductNestedInput>;
  productNutrients?: InputMaybe<ProductNutrientUpdateManyWithoutProductNestedInput>;
};

export type ProductUpdateWithoutProductNutrientsInput = {
  dishProducts?: InputMaybe<DishProductUpdateManyWithoutProductNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  productCategory?: InputMaybe<ProductCategoryUpdateOneRequiredWithoutProductsNestedInput>;
  productClearWeights?: InputMaybe<ProductClearWeightUpdateManyWithoutProductNestedInput>;
  productMeasures?: InputMaybe<ProductMeasureUpdateManyWithoutProductNestedInput>;
};

export type ProductUpsertWithWhereUniqueWithoutProductCategoryInput = {
  create: ProductCreateWithoutProductCategoryInput;
  update: ProductUpdateWithoutProductCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithoutDishProductsInput = {
  create: ProductCreateWithoutDishProductsInput;
  update: ProductUpdateWithoutDishProductsInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpsertWithoutProductClearWeightsInput = {
  create: ProductCreateWithoutProductClearWeightsInput;
  update: ProductUpdateWithoutProductClearWeightsInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpsertWithoutProductMeasuresInput = {
  create: ProductCreateWithoutProductMeasuresInput;
  update: ProductUpdateWithoutProductMeasuresInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpsertWithoutProductNutrientsInput = {
  create: ProductCreateWithoutProductNutrientsInput;
  update: ProductUpdateWithoutProductNutrientsInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  categoryId?: InputMaybe<IntFilter>;
  dishProducts?: InputMaybe<DishProductListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  productCategory?: InputMaybe<ProductCategoryRelationFilter>;
  productClearWeights?: InputMaybe<ProductClearWeightListRelationFilter>;
  productMeasures?: InputMaybe<ProductMeasureListRelationFilter>;
  productNutrients?: InputMaybe<ProductNutrientListRelationFilter>;
};

export type ProductWhereUniqueInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  categoryId?: InputMaybe<IntFilter>;
  dishProducts?: InputMaybe<DishProductListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productCategory?: InputMaybe<ProductCategoryRelationFilter>;
  productClearWeights?: InputMaybe<ProductClearWeightListRelationFilter>;
  productMeasures?: InputMaybe<ProductMeasureListRelationFilter>;
  productNutrients?: InputMaybe<ProductNutrientListRelationFilter>;
};

export type Query = {
  __typename?: 'Query';
  aggregateDailyMenu: AggregateDailyMenu;
  aggregateDish: AggregateDish;
  aggregateDishNutrient: AggregateDishNutrient;
  aggregateDishProduct: AggregateDishProduct;
  aggregateMenuDish: AggregateMenuDish;
  aggregateNutrient: AggregateNutrient;
  aggregateNutrientCategory: AggregateNutrientCategory;
  aggregateProduct: AggregateProduct;
  aggregateProductCategory: AggregateProductCategory;
  aggregateProductClearWeight: AggregateProductClearWeight;
  aggregateProductMeasure: AggregateProductMeasure;
  aggregateProductNutrient: AggregateProductNutrient;
  dailyMenu?: Maybe<DailyMenu>;
  dailyMenus: Array<DailyMenu>;
  dish?: Maybe<Dish>;
  dishNutrient?: Maybe<DishNutrient>;
  dishNutrients: Array<DishNutrient>;
  dishProduct?: Maybe<DishProduct>;
  dishProducts: Array<DishProduct>;
  dishes: Array<Dish>;
  findFirstDailyMenu?: Maybe<DailyMenu>;
  findFirstDailyMenuOrThrow?: Maybe<DailyMenu>;
  findFirstDish?: Maybe<Dish>;
  findFirstDishNutrient?: Maybe<DishNutrient>;
  findFirstDishNutrientOrThrow?: Maybe<DishNutrient>;
  findFirstDishOrThrow?: Maybe<Dish>;
  findFirstDishProduct?: Maybe<DishProduct>;
  findFirstDishProductOrThrow?: Maybe<DishProduct>;
  findFirstMenuDish?: Maybe<MenuDish>;
  findFirstMenuDishOrThrow?: Maybe<MenuDish>;
  findFirstNutrient?: Maybe<Nutrient>;
  findFirstNutrientCategory?: Maybe<NutrientCategory>;
  findFirstNutrientCategoryOrThrow?: Maybe<NutrientCategory>;
  findFirstNutrientOrThrow?: Maybe<Nutrient>;
  findFirstProduct?: Maybe<Product>;
  findFirstProductCategory?: Maybe<ProductCategory>;
  findFirstProductCategoryOrThrow?: Maybe<ProductCategory>;
  findFirstProductClearWeight?: Maybe<ProductClearWeight>;
  findFirstProductClearWeightOrThrow?: Maybe<ProductClearWeight>;
  findFirstProductMeasure?: Maybe<ProductMeasure>;
  findFirstProductMeasureOrThrow?: Maybe<ProductMeasure>;
  findFirstProductNutrient?: Maybe<ProductNutrient>;
  findFirstProductNutrientOrThrow?: Maybe<ProductNutrient>;
  findFirstProductOrThrow?: Maybe<Product>;
  getDailyMenu?: Maybe<DailyMenu>;
  getDish?: Maybe<Dish>;
  getDishNutrient?: Maybe<DishNutrient>;
  getDishProduct?: Maybe<DishProduct>;
  getMenuDish?: Maybe<MenuDish>;
  getNutrient?: Maybe<Nutrient>;
  getNutrientCategory?: Maybe<NutrientCategory>;
  getProduct?: Maybe<Product>;
  getProductCategory?: Maybe<ProductCategory>;
  getProductClearWeight?: Maybe<ProductClearWeight>;
  getProductMeasure?: Maybe<ProductMeasure>;
  getProductNutrient?: Maybe<ProductNutrient>;
  groupByDailyMenu: Array<DailyMenuGroupBy>;
  groupByDish: Array<DishGroupBy>;
  groupByDishNutrient: Array<DishNutrientGroupBy>;
  groupByDishProduct: Array<DishProductGroupBy>;
  groupByMenuDish: Array<MenuDishGroupBy>;
  groupByNutrient: Array<NutrientGroupBy>;
  groupByNutrientCategory: Array<NutrientCategoryGroupBy>;
  groupByProduct: Array<ProductGroupBy>;
  groupByProductCategory: Array<ProductCategoryGroupBy>;
  groupByProductClearWeight: Array<ProductClearWeightGroupBy>;
  groupByProductMeasure: Array<ProductMeasureGroupBy>;
  groupByProductNutrient: Array<ProductNutrientGroupBy>;
  menuDish?: Maybe<MenuDish>;
  menuDishes: Array<MenuDish>;
  nutrient?: Maybe<Nutrient>;
  nutrientCategories: Array<NutrientCategory>;
  nutrientCategory?: Maybe<NutrientCategory>;
  nutrients: Array<Nutrient>;
  product?: Maybe<Product>;
  productCategories: Array<ProductCategory>;
  productCategory?: Maybe<ProductCategory>;
  productClearWeight?: Maybe<ProductClearWeight>;
  productClearWeights: Array<ProductClearWeight>;
  productMeasure?: Maybe<ProductMeasure>;
  productMeasures: Array<ProductMeasure>;
  productNutrient?: Maybe<ProductNutrient>;
  productNutrients: Array<ProductNutrient>;
  products: Array<Product>;
};


export type QueryAggregateDailyMenuArgs = {
  cursor?: InputMaybe<DailyMenuWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DailyMenuOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DailyMenuWhereInput>;
};


export type QueryAggregateDishArgs = {
  cursor?: InputMaybe<DishWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DishOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishWhereInput>;
};


export type QueryAggregateDishNutrientArgs = {
  cursor?: InputMaybe<DishNutrientWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DishNutrientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishNutrientWhereInput>;
};


export type QueryAggregateDishProductArgs = {
  cursor?: InputMaybe<DishProductWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DishProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishProductWhereInput>;
};


export type QueryAggregateMenuDishArgs = {
  cursor?: InputMaybe<MenuDishWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MenuDishOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuDishWhereInput>;
};


export type QueryAggregateNutrientArgs = {
  cursor?: InputMaybe<NutrientWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NutrientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NutrientWhereInput>;
};


export type QueryAggregateNutrientCategoryArgs = {
  cursor?: InputMaybe<NutrientCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NutrientCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NutrientCategoryWhereInput>;
};


export type QueryAggregateProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryAggregateProductCategoryArgs = {
  cursor?: InputMaybe<ProductCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductCategoryWhereInput>;
};


export type QueryAggregateProductClearWeightArgs = {
  cursor?: InputMaybe<ProductClearWeightWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductClearWeightOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductClearWeightWhereInput>;
};


export type QueryAggregateProductMeasureArgs = {
  cursor?: InputMaybe<ProductMeasureWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductMeasureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductMeasureWhereInput>;
};


export type QueryAggregateProductNutrientArgs = {
  cursor?: InputMaybe<ProductNutrientWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductNutrientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductNutrientWhereInput>;
};


export type QueryDailyMenuArgs = {
  where: DailyMenuWhereUniqueInput;
};


export type QueryDailyMenusArgs = {
  cursor?: InputMaybe<DailyMenuWhereUniqueInput>;
  distinct?: InputMaybe<Array<DailyMenuScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DailyMenuOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DailyMenuWhereInput>;
};


export type QueryDishArgs = {
  where: DishWhereUniqueInput;
};


export type QueryDishNutrientArgs = {
  where: DishNutrientWhereUniqueInput;
};


export type QueryDishNutrientsArgs = {
  cursor?: InputMaybe<DishNutrientWhereUniqueInput>;
  distinct?: InputMaybe<Array<DishNutrientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DishNutrientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishNutrientWhereInput>;
};


export type QueryDishProductArgs = {
  where: DishProductWhereUniqueInput;
};


export type QueryDishProductsArgs = {
  cursor?: InputMaybe<DishProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<DishProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DishProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishProductWhereInput>;
};


export type QueryDishesArgs = {
  cursor?: InputMaybe<DishWhereUniqueInput>;
  distinct?: InputMaybe<Array<DishScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DishOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishWhereInput>;
};


export type QueryFindFirstDailyMenuArgs = {
  cursor?: InputMaybe<DailyMenuWhereUniqueInput>;
  distinct?: InputMaybe<Array<DailyMenuScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DailyMenuOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DailyMenuWhereInput>;
};


export type QueryFindFirstDailyMenuOrThrowArgs = {
  cursor?: InputMaybe<DailyMenuWhereUniqueInput>;
  distinct?: InputMaybe<Array<DailyMenuScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DailyMenuOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DailyMenuWhereInput>;
};


export type QueryFindFirstDishArgs = {
  cursor?: InputMaybe<DishWhereUniqueInput>;
  distinct?: InputMaybe<Array<DishScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DishOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishWhereInput>;
};


export type QueryFindFirstDishNutrientArgs = {
  cursor?: InputMaybe<DishNutrientWhereUniqueInput>;
  distinct?: InputMaybe<Array<DishNutrientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DishNutrientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishNutrientWhereInput>;
};


export type QueryFindFirstDishNutrientOrThrowArgs = {
  cursor?: InputMaybe<DishNutrientWhereUniqueInput>;
  distinct?: InputMaybe<Array<DishNutrientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DishNutrientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishNutrientWhereInput>;
};


export type QueryFindFirstDishOrThrowArgs = {
  cursor?: InputMaybe<DishWhereUniqueInput>;
  distinct?: InputMaybe<Array<DishScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DishOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishWhereInput>;
};


export type QueryFindFirstDishProductArgs = {
  cursor?: InputMaybe<DishProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<DishProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DishProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishProductWhereInput>;
};


export type QueryFindFirstDishProductOrThrowArgs = {
  cursor?: InputMaybe<DishProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<DishProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DishProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishProductWhereInput>;
};


export type QueryFindFirstMenuDishArgs = {
  cursor?: InputMaybe<MenuDishWhereUniqueInput>;
  distinct?: InputMaybe<Array<MenuDishScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MenuDishOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuDishWhereInput>;
};


export type QueryFindFirstMenuDishOrThrowArgs = {
  cursor?: InputMaybe<MenuDishWhereUniqueInput>;
  distinct?: InputMaybe<Array<MenuDishScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MenuDishOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuDishWhereInput>;
};


export type QueryFindFirstNutrientArgs = {
  cursor?: InputMaybe<NutrientWhereUniqueInput>;
  distinct?: InputMaybe<Array<NutrientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NutrientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NutrientWhereInput>;
};


export type QueryFindFirstNutrientCategoryArgs = {
  cursor?: InputMaybe<NutrientCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<NutrientCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NutrientCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NutrientCategoryWhereInput>;
};


export type QueryFindFirstNutrientCategoryOrThrowArgs = {
  cursor?: InputMaybe<NutrientCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<NutrientCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NutrientCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NutrientCategoryWhereInput>;
};


export type QueryFindFirstNutrientOrThrowArgs = {
  cursor?: InputMaybe<NutrientWhereUniqueInput>;
  distinct?: InputMaybe<Array<NutrientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NutrientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NutrientWhereInput>;
};


export type QueryFindFirstProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryFindFirstProductCategoryArgs = {
  cursor?: InputMaybe<ProductCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductCategoryWhereInput>;
};


export type QueryFindFirstProductCategoryOrThrowArgs = {
  cursor?: InputMaybe<ProductCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductCategoryWhereInput>;
};


export type QueryFindFirstProductClearWeightArgs = {
  cursor?: InputMaybe<ProductClearWeightWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductClearWeightScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductClearWeightOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductClearWeightWhereInput>;
};


export type QueryFindFirstProductClearWeightOrThrowArgs = {
  cursor?: InputMaybe<ProductClearWeightWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductClearWeightScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductClearWeightOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductClearWeightWhereInput>;
};


export type QueryFindFirstProductMeasureArgs = {
  cursor?: InputMaybe<ProductMeasureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductMeasureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductMeasureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductMeasureWhereInput>;
};


export type QueryFindFirstProductMeasureOrThrowArgs = {
  cursor?: InputMaybe<ProductMeasureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductMeasureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductMeasureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductMeasureWhereInput>;
};


export type QueryFindFirstProductNutrientArgs = {
  cursor?: InputMaybe<ProductNutrientWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductNutrientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductNutrientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductNutrientWhereInput>;
};


export type QueryFindFirstProductNutrientOrThrowArgs = {
  cursor?: InputMaybe<ProductNutrientWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductNutrientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductNutrientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductNutrientWhereInput>;
};


export type QueryFindFirstProductOrThrowArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryGetDailyMenuArgs = {
  where: DailyMenuWhereUniqueInput;
};


export type QueryGetDishArgs = {
  where: DishWhereUniqueInput;
};


export type QueryGetDishNutrientArgs = {
  where: DishNutrientWhereUniqueInput;
};


export type QueryGetDishProductArgs = {
  where: DishProductWhereUniqueInput;
};


export type QueryGetMenuDishArgs = {
  where: MenuDishWhereUniqueInput;
};


export type QueryGetNutrientArgs = {
  where: NutrientWhereUniqueInput;
};


export type QueryGetNutrientCategoryArgs = {
  where: NutrientCategoryWhereUniqueInput;
};


export type QueryGetProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryGetProductCategoryArgs = {
  where: ProductCategoryWhereUniqueInput;
};


export type QueryGetProductClearWeightArgs = {
  where: ProductClearWeightWhereUniqueInput;
};


export type QueryGetProductMeasureArgs = {
  where: ProductMeasureWhereUniqueInput;
};


export type QueryGetProductNutrientArgs = {
  where: ProductNutrientWhereUniqueInput;
};


export type QueryGroupByDailyMenuArgs = {
  by: Array<DailyMenuScalarFieldEnum>;
  having?: InputMaybe<DailyMenuScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DailyMenuOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DailyMenuWhereInput>;
};


export type QueryGroupByDishArgs = {
  by: Array<DishScalarFieldEnum>;
  having?: InputMaybe<DishScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DishOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishWhereInput>;
};


export type QueryGroupByDishNutrientArgs = {
  by: Array<DishNutrientScalarFieldEnum>;
  having?: InputMaybe<DishNutrientScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DishNutrientOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishNutrientWhereInput>;
};


export type QueryGroupByDishProductArgs = {
  by: Array<DishProductScalarFieldEnum>;
  having?: InputMaybe<DishProductScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DishProductOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DishProductWhereInput>;
};


export type QueryGroupByMenuDishArgs = {
  by: Array<MenuDishScalarFieldEnum>;
  having?: InputMaybe<MenuDishScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MenuDishOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuDishWhereInput>;
};


export type QueryGroupByNutrientArgs = {
  by: Array<NutrientScalarFieldEnum>;
  having?: InputMaybe<NutrientScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NutrientOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NutrientWhereInput>;
};


export type QueryGroupByNutrientCategoryArgs = {
  by: Array<NutrientCategoryScalarFieldEnum>;
  having?: InputMaybe<NutrientCategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NutrientCategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NutrientCategoryWhereInput>;
};


export type QueryGroupByProductArgs = {
  by: Array<ProductScalarFieldEnum>;
  having?: InputMaybe<ProductScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryGroupByProductCategoryArgs = {
  by: Array<ProductCategoryScalarFieldEnum>;
  having?: InputMaybe<ProductCategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductCategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductCategoryWhereInput>;
};


export type QueryGroupByProductClearWeightArgs = {
  by: Array<ProductClearWeightScalarFieldEnum>;
  having?: InputMaybe<ProductClearWeightScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductClearWeightOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductClearWeightWhereInput>;
};


export type QueryGroupByProductMeasureArgs = {
  by: Array<ProductMeasureScalarFieldEnum>;
  having?: InputMaybe<ProductMeasureScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductMeasureOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductMeasureWhereInput>;
};


export type QueryGroupByProductNutrientArgs = {
  by: Array<ProductNutrientScalarFieldEnum>;
  having?: InputMaybe<ProductNutrientScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductNutrientOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductNutrientWhereInput>;
};


export type QueryMenuDishArgs = {
  where: MenuDishWhereUniqueInput;
};


export type QueryMenuDishesArgs = {
  cursor?: InputMaybe<MenuDishWhereUniqueInput>;
  distinct?: InputMaybe<Array<MenuDishScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MenuDishOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuDishWhereInput>;
};


export type QueryNutrientArgs = {
  where: NutrientWhereUniqueInput;
};


export type QueryNutrientCategoriesArgs = {
  cursor?: InputMaybe<NutrientCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<NutrientCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NutrientCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NutrientCategoryWhereInput>;
};


export type QueryNutrientCategoryArgs = {
  where: NutrientCategoryWhereUniqueInput;
};


export type QueryNutrientsArgs = {
  cursor?: InputMaybe<NutrientWhereUniqueInput>;
  distinct?: InputMaybe<Array<NutrientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NutrientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NutrientWhereInput>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductCategoriesArgs = {
  cursor?: InputMaybe<ProductCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductCategoryWhereInput>;
};


export type QueryProductCategoryArgs = {
  where: ProductCategoryWhereUniqueInput;
};


export type QueryProductClearWeightArgs = {
  where: ProductClearWeightWhereUniqueInput;
};


export type QueryProductClearWeightsArgs = {
  cursor?: InputMaybe<ProductClearWeightWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductClearWeightScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductClearWeightOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductClearWeightWhereInput>;
};


export type QueryProductMeasureArgs = {
  where: ProductMeasureWhereUniqueInput;
};


export type QueryProductMeasuresArgs = {
  cursor?: InputMaybe<ProductMeasureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductMeasureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductMeasureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductMeasureWhereInput>;
};


export type QueryProductNutrientArgs = {
  where: ProductNutrientWhereUniqueInput;
};


export type QueryProductNutrientsArgs = {
  cursor?: InputMaybe<ProductNutrientWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductNutrientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductNutrientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductNutrientWhereInput>;
};


export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDishMutationVariables = Exact<{
  data: DishCreateInput;
}>;


export type CreateDishMutation = { __typename?: 'Mutation', createOneDish: { __typename?: 'Dish', id: number, name: string, description?: string | null } };

export type FindProductIdByNameQueryVariables = Exact<{
  term?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindProductIdByNameQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: number, name: string }> };

export type FindProductInfoByIdQueryVariables = Exact<{
  productId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FindProductInfoByIdQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: number, name: string, productCategory: { __typename?: 'ProductCategory', name: string }, productMeasures: Array<{ __typename?: 'ProductMeasure', name: string, desc?: string | null, value: number }>, productClearWeights: Array<{ __typename?: 'ProductClearWeight', value: number }>, productNutrients: Array<{ __typename?: 'ProductNutrient', nutrientId: string, valueAmount: number, valueExponent: number, valueString?: string | null, nutrient: { __typename?: 'Nutrient', name: string, categoryId: number, nutrientCategory: { __typename?: 'NutrientCategory', name: string } } }> }> };

export type GetAllDishesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDishesQuery = { __typename?: 'Query', dishes: Array<{ __typename?: 'Dish', id: number, name: string, description?: string | null }> };

export type GetAllDishProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDishProductsQuery = { __typename?: 'Query', dishes: Array<{ __typename?: 'Dish', id: number, name: string, description?: string | null, dishProducts: Array<{ __typename?: 'DishProduct', productId: number, cookCoeff: number, amount: number, product: { __typename?: 'Product', name: string } }>, dishNutrients: Array<{ __typename?: 'DishNutrient', nutrientId: string, amount: number, nutrient: { __typename?: 'Nutrient', name: string } }> }> };

export type FindProductByNameBguQueryVariables = Exact<{
  term?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindProductByNameBguQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: number, name: string, categoryId: number, productNutrients: Array<{ __typename?: 'ProductNutrient', id: number, valueString?: string | null, valueAmount: number, valueExponent: number, productId: number, nutrientId: string, nutrient: { __typename?: 'Nutrient', id: string, name: string, categoryId: number } }> }> };

export type GetProductCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductCategoriesQuery = { __typename?: 'Query', productCategories: Array<{ __typename?: 'ProductCategory', id: number, name: string, desc?: string | null, _count?: { __typename?: 'ProductCategoryCount', products: number } | null }> };

export type GetProductsSkipTakeBguQueryVariables = Exact<{
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type GetProductsSkipTakeBguQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: number, name: string, categoryId: number, productNutrients: Array<{ __typename?: 'ProductNutrient', id: number, valueString?: string | null, valueAmount: number, valueExponent: number, productId: number, nutrientId: string, nutrient: { __typename?: 'Nutrient', id: string, name: string, categoryId: number } }> }> };


export const CreateDishDocument = gql`
    mutation CreateDish($data: DishCreateInput!) {
  createOneDish(data: $data) {
    id
    name
    description
  }
}
    `;
export type CreateDishMutationFn = Apollo.MutationFunction<CreateDishMutation, CreateDishMutationVariables>;

/**
 * __useCreateDishMutation__
 *
 * To run a mutation, you first call `useCreateDishMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDishMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDishMutation, { data, loading, error }] = useCreateDishMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateDishMutation(baseOptions?: Apollo.MutationHookOptions<CreateDishMutation, CreateDishMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDishMutation, CreateDishMutationVariables>(CreateDishDocument, options);
      }
export type CreateDishMutationHookResult = ReturnType<typeof useCreateDishMutation>;
export type CreateDishMutationResult = Apollo.MutationResult<CreateDishMutation>;
export type CreateDishMutationOptions = Apollo.BaseMutationOptions<CreateDishMutation, CreateDishMutationVariables>;
export const FindProductIdByNameDocument = gql`
    query FindProductIdByName($term: String) {
  products(where: {name: {contains: $term}}) {
    id
    name
  }
}
    `;

/**
 * __useFindProductIdByNameQuery__
 *
 * To run a query within a React component, call `useFindProductIdByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProductIdByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProductIdByNameQuery({
 *   variables: {
 *      term: // value for 'term'
 *   },
 * });
 */
export function useFindProductIdByNameQuery(baseOptions?: Apollo.QueryHookOptions<FindProductIdByNameQuery, FindProductIdByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProductIdByNameQuery, FindProductIdByNameQueryVariables>(FindProductIdByNameDocument, options);
      }
export function useFindProductIdByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProductIdByNameQuery, FindProductIdByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProductIdByNameQuery, FindProductIdByNameQueryVariables>(FindProductIdByNameDocument, options);
        }
export function useFindProductIdByNameSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindProductIdByNameQuery, FindProductIdByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindProductIdByNameQuery, FindProductIdByNameQueryVariables>(FindProductIdByNameDocument, options);
        }
export type FindProductIdByNameQueryHookResult = ReturnType<typeof useFindProductIdByNameQuery>;
export type FindProductIdByNameLazyQueryHookResult = ReturnType<typeof useFindProductIdByNameLazyQuery>;
export type FindProductIdByNameSuspenseQueryHookResult = ReturnType<typeof useFindProductIdByNameSuspenseQuery>;
export type FindProductIdByNameQueryResult = Apollo.QueryResult<FindProductIdByNameQuery, FindProductIdByNameQueryVariables>;
export const FindProductInfoByIdDocument = gql`
    query FindProductInfoById($productId: Int) {
  products(where: {id: {equals: $productId}}) {
    id
    name
    productCategory {
      name
    }
    productMeasures {
      name
      desc
      value
    }
    productClearWeights {
      value
    }
    productNutrients {
      nutrientId
      nutrient {
        name
        categoryId
        nutrientCategory {
          name
        }
      }
      valueAmount
      valueExponent
      valueString
    }
  }
}
    `;

/**
 * __useFindProductInfoByIdQuery__
 *
 * To run a query within a React component, call `useFindProductInfoByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProductInfoByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProductInfoByIdQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useFindProductInfoByIdQuery(baseOptions?: Apollo.QueryHookOptions<FindProductInfoByIdQuery, FindProductInfoByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProductInfoByIdQuery, FindProductInfoByIdQueryVariables>(FindProductInfoByIdDocument, options);
      }
export function useFindProductInfoByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProductInfoByIdQuery, FindProductInfoByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProductInfoByIdQuery, FindProductInfoByIdQueryVariables>(FindProductInfoByIdDocument, options);
        }
export function useFindProductInfoByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindProductInfoByIdQuery, FindProductInfoByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindProductInfoByIdQuery, FindProductInfoByIdQueryVariables>(FindProductInfoByIdDocument, options);
        }
export type FindProductInfoByIdQueryHookResult = ReturnType<typeof useFindProductInfoByIdQuery>;
export type FindProductInfoByIdLazyQueryHookResult = ReturnType<typeof useFindProductInfoByIdLazyQuery>;
export type FindProductInfoByIdSuspenseQueryHookResult = ReturnType<typeof useFindProductInfoByIdSuspenseQuery>;
export type FindProductInfoByIdQueryResult = Apollo.QueryResult<FindProductInfoByIdQuery, FindProductInfoByIdQueryVariables>;
export const GetAllDishesDocument = gql`
    query GetAllDishes {
  dishes {
    id
    name
    description
  }
}
    `;

/**
 * __useGetAllDishesQuery__
 *
 * To run a query within a React component, call `useGetAllDishesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDishesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDishesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllDishesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllDishesQuery, GetAllDishesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDishesQuery, GetAllDishesQueryVariables>(GetAllDishesDocument, options);
      }
export function useGetAllDishesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDishesQuery, GetAllDishesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDishesQuery, GetAllDishesQueryVariables>(GetAllDishesDocument, options);
        }
export function useGetAllDishesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllDishesQuery, GetAllDishesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllDishesQuery, GetAllDishesQueryVariables>(GetAllDishesDocument, options);
        }
export type GetAllDishesQueryHookResult = ReturnType<typeof useGetAllDishesQuery>;
export type GetAllDishesLazyQueryHookResult = ReturnType<typeof useGetAllDishesLazyQuery>;
export type GetAllDishesSuspenseQueryHookResult = ReturnType<typeof useGetAllDishesSuspenseQuery>;
export type GetAllDishesQueryResult = Apollo.QueryResult<GetAllDishesQuery, GetAllDishesQueryVariables>;
export const GetAllDishProductsDocument = gql`
    query GetAllDishProducts {
  dishes {
    id
    name
    description
    dishProducts {
      productId
      cookCoeff
      amount
      product {
        name
      }
    }
    dishNutrients {
      nutrientId
      nutrient {
        name
      }
      amount
    }
  }
}
    `;

/**
 * __useGetAllDishProductsQuery__
 *
 * To run a query within a React component, call `useGetAllDishProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDishProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDishProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllDishProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllDishProductsQuery, GetAllDishProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDishProductsQuery, GetAllDishProductsQueryVariables>(GetAllDishProductsDocument, options);
      }
export function useGetAllDishProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDishProductsQuery, GetAllDishProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDishProductsQuery, GetAllDishProductsQueryVariables>(GetAllDishProductsDocument, options);
        }
export function useGetAllDishProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllDishProductsQuery, GetAllDishProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllDishProductsQuery, GetAllDishProductsQueryVariables>(GetAllDishProductsDocument, options);
        }
export type GetAllDishProductsQueryHookResult = ReturnType<typeof useGetAllDishProductsQuery>;
export type GetAllDishProductsLazyQueryHookResult = ReturnType<typeof useGetAllDishProductsLazyQuery>;
export type GetAllDishProductsSuspenseQueryHookResult = ReturnType<typeof useGetAllDishProductsSuspenseQuery>;
export type GetAllDishProductsQueryResult = Apollo.QueryResult<GetAllDishProductsQuery, GetAllDishProductsQueryVariables>;
export const FindProductByNameBguDocument = gql`
    query FindProductByNameBgu($term: String) {
  products(where: {name: {contains: $term}}) {
    id
    name
    categoryId
    productNutrients(where: {nutrientId: {in: ["b", "g", "u", "kcal"]}}) {
      id
      valueString
      valueAmount
      valueExponent
      productId
      nutrientId
      nutrient {
        id
        name
        categoryId
      }
    }
  }
}
    `;

/**
 * __useFindProductByNameBguQuery__
 *
 * To run a query within a React component, call `useFindProductByNameBguQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProductByNameBguQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProductByNameBguQuery({
 *   variables: {
 *      term: // value for 'term'
 *   },
 * });
 */
export function useFindProductByNameBguQuery(baseOptions?: Apollo.QueryHookOptions<FindProductByNameBguQuery, FindProductByNameBguQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProductByNameBguQuery, FindProductByNameBguQueryVariables>(FindProductByNameBguDocument, options);
      }
export function useFindProductByNameBguLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProductByNameBguQuery, FindProductByNameBguQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProductByNameBguQuery, FindProductByNameBguQueryVariables>(FindProductByNameBguDocument, options);
        }
export function useFindProductByNameBguSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindProductByNameBguQuery, FindProductByNameBguQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindProductByNameBguQuery, FindProductByNameBguQueryVariables>(FindProductByNameBguDocument, options);
        }
export type FindProductByNameBguQueryHookResult = ReturnType<typeof useFindProductByNameBguQuery>;
export type FindProductByNameBguLazyQueryHookResult = ReturnType<typeof useFindProductByNameBguLazyQuery>;
export type FindProductByNameBguSuspenseQueryHookResult = ReturnType<typeof useFindProductByNameBguSuspenseQuery>;
export type FindProductByNameBguQueryResult = Apollo.QueryResult<FindProductByNameBguQuery, FindProductByNameBguQueryVariables>;
export const GetProductCategoriesDocument = gql`
    query GetProductCategories {
  productCategories {
    id
    name
    desc
    _count {
      products
    }
  }
}
    `;

/**
 * __useGetProductCategoriesQuery__
 *
 * To run a query within a React component, call `useGetProductCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetProductCategoriesQuery, GetProductCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductCategoriesQuery, GetProductCategoriesQueryVariables>(GetProductCategoriesDocument, options);
      }
export function useGetProductCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductCategoriesQuery, GetProductCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductCategoriesQuery, GetProductCategoriesQueryVariables>(GetProductCategoriesDocument, options);
        }
export function useGetProductCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProductCategoriesQuery, GetProductCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductCategoriesQuery, GetProductCategoriesQueryVariables>(GetProductCategoriesDocument, options);
        }
export type GetProductCategoriesQueryHookResult = ReturnType<typeof useGetProductCategoriesQuery>;
export type GetProductCategoriesLazyQueryHookResult = ReturnType<typeof useGetProductCategoriesLazyQuery>;
export type GetProductCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetProductCategoriesSuspenseQuery>;
export type GetProductCategoriesQueryResult = Apollo.QueryResult<GetProductCategoriesQuery, GetProductCategoriesQueryVariables>;
export const GetProductsSkipTakeBguDocument = gql`
    query GetProductsSkipTakeBgu($skip: Int!, $take: Int!) {
  products(skip: $skip, take: $take) {
    id
    name
    categoryId
    productNutrients(where: {nutrientId: {in: ["b", "g", "u", "kcal"]}}) {
      id
      valueString
      valueAmount
      valueExponent
      productId
      nutrientId
      nutrient {
        id
        name
        categoryId
      }
    }
  }
}
    `;

/**
 * __useGetProductsSkipTakeBguQuery__
 *
 * To run a query within a React component, call `useGetProductsSkipTakeBguQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsSkipTakeBguQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsSkipTakeBguQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetProductsSkipTakeBguQuery(baseOptions: Apollo.QueryHookOptions<GetProductsSkipTakeBguQuery, GetProductsSkipTakeBguQueryVariables> & ({ variables: GetProductsSkipTakeBguQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsSkipTakeBguQuery, GetProductsSkipTakeBguQueryVariables>(GetProductsSkipTakeBguDocument, options);
      }
export function useGetProductsSkipTakeBguLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsSkipTakeBguQuery, GetProductsSkipTakeBguQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsSkipTakeBguQuery, GetProductsSkipTakeBguQueryVariables>(GetProductsSkipTakeBguDocument, options);
        }
export function useGetProductsSkipTakeBguSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProductsSkipTakeBguQuery, GetProductsSkipTakeBguQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductsSkipTakeBguQuery, GetProductsSkipTakeBguQueryVariables>(GetProductsSkipTakeBguDocument, options);
        }
export type GetProductsSkipTakeBguQueryHookResult = ReturnType<typeof useGetProductsSkipTakeBguQuery>;
export type GetProductsSkipTakeBguLazyQueryHookResult = ReturnType<typeof useGetProductsSkipTakeBguLazyQuery>;
export type GetProductsSkipTakeBguSuspenseQueryHookResult = ReturnType<typeof useGetProductsSkipTakeBguSuspenseQuery>;
export type GetProductsSkipTakeBguQueryResult = Apollo.QueryResult<GetProductsSkipTakeBguQuery, GetProductsSkipTakeBguQueryVariables>;