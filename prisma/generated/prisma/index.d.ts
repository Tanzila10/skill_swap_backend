
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model SkillCategory
 * 
 */
export type SkillCategory = $Result.DefaultSelection<Prisma.$SkillCategoryPayload>
/**
 * Model SwapRequest
 * 
 */
export type SwapRequest = $Result.DefaultSelection<Prisma.$SwapRequestPayload>
/**
 * Model ActiveSwap
 * 
 */
export type ActiveSwap = $Result.DefaultSelection<Prisma.$ActiveSwapPayload>
/**
 * Model SwapCompletion
 * 
 */
export type SwapCompletion = $Result.DefaultSelection<Prisma.$SwapCompletionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Level: {
  beginner: 'beginner',
  intermediate: 'intermediate',
  professional: 'professional',
  expert: 'expert'
};

export type Level = (typeof Level)[keyof typeof Level]


export const SwapStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED'
};

export type SwapStatus = (typeof SwapStatus)[keyof typeof SwapStatus]


export const ActiveSwapStatus: {
  active: 'active',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type ActiveSwapStatus = (typeof ActiveSwapStatus)[keyof typeof ActiveSwapStatus]

}

export type Level = $Enums.Level

export const Level: typeof $Enums.Level

export type SwapStatus = $Enums.SwapStatus

export const SwapStatus: typeof $Enums.SwapStatus

export type ActiveSwapStatus = $Enums.ActiveSwapStatus

export const ActiveSwapStatus: typeof $Enums.ActiveSwapStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillCategory`: Exposes CRUD operations for the **SkillCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillCategories
    * const skillCategories = await prisma.skillCategory.findMany()
    * ```
    */
  get skillCategory(): Prisma.SkillCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.swapRequest`: Exposes CRUD operations for the **SwapRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SwapRequests
    * const swapRequests = await prisma.swapRequest.findMany()
    * ```
    */
  get swapRequest(): Prisma.SwapRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activeSwap`: Exposes CRUD operations for the **ActiveSwap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActiveSwaps
    * const activeSwaps = await prisma.activeSwap.findMany()
    * ```
    */
  get activeSwap(): Prisma.ActiveSwapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.swapCompletion`: Exposes CRUD operations for the **SwapCompletion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SwapCompletions
    * const swapCompletions = await prisma.swapCompletion.findMany()
    * ```
    */
  get swapCompletion(): Prisma.SwapCompletionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Message: 'Message',
    RefreshToken: 'RefreshToken',
    Skill: 'Skill',
    SkillCategory: 'SkillCategory',
    SwapRequest: 'SwapRequest',
    ActiveSwap: 'ActiveSwap',
    SwapCompletion: 'SwapCompletion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "message" | "refreshToken" | "skill" | "skillCategory" | "swapRequest" | "activeSwap" | "swapCompletion"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MessageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MessageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RefreshTokenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RefreshTokenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SkillFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SkillAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      SkillCategory: {
        payload: Prisma.$SkillCategoryPayload<ExtArgs>
        fields: Prisma.SkillCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          findFirst: {
            args: Prisma.SkillCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          findMany: {
            args: Prisma.SkillCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>[]
          }
          create: {
            args: Prisma.SkillCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          createMany: {
            args: Prisma.SkillCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SkillCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          update: {
            args: Prisma.SkillCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SkillCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkillCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          aggregate: {
            args: Prisma.SkillCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillCategory>
          }
          groupBy: {
            args: Prisma.SkillCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillCategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SkillCategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SkillCategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SkillCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCategoryCountAggregateOutputType> | number
          }
        }
      }
      SwapRequest: {
        payload: Prisma.$SwapRequestPayload<ExtArgs>
        fields: Prisma.SwapRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SwapRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SwapRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload>
          }
          findFirst: {
            args: Prisma.SwapRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SwapRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload>
          }
          findMany: {
            args: Prisma.SwapRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload>[]
          }
          create: {
            args: Prisma.SwapRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload>
          }
          createMany: {
            args: Prisma.SwapRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SwapRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload>
          }
          update: {
            args: Prisma.SwapRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload>
          }
          deleteMany: {
            args: Prisma.SwapRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SwapRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SwapRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapRequestPayload>
          }
          aggregate: {
            args: Prisma.SwapRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSwapRequest>
          }
          groupBy: {
            args: Prisma.SwapRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<SwapRequestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SwapRequestFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SwapRequestAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SwapRequestCountArgs<ExtArgs>
            result: $Utils.Optional<SwapRequestCountAggregateOutputType> | number
          }
        }
      }
      ActiveSwap: {
        payload: Prisma.$ActiveSwapPayload<ExtArgs>
        fields: Prisma.ActiveSwapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActiveSwapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSwapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActiveSwapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSwapPayload>
          }
          findFirst: {
            args: Prisma.ActiveSwapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSwapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActiveSwapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSwapPayload>
          }
          findMany: {
            args: Prisma.ActiveSwapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSwapPayload>[]
          }
          create: {
            args: Prisma.ActiveSwapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSwapPayload>
          }
          createMany: {
            args: Prisma.ActiveSwapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActiveSwapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSwapPayload>
          }
          update: {
            args: Prisma.ActiveSwapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSwapPayload>
          }
          deleteMany: {
            args: Prisma.ActiveSwapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActiveSwapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActiveSwapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveSwapPayload>
          }
          aggregate: {
            args: Prisma.ActiveSwapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActiveSwap>
          }
          groupBy: {
            args: Prisma.ActiveSwapGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActiveSwapGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ActiveSwapFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ActiveSwapAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ActiveSwapCountArgs<ExtArgs>
            result: $Utils.Optional<ActiveSwapCountAggregateOutputType> | number
          }
        }
      }
      SwapCompletion: {
        payload: Prisma.$SwapCompletionPayload<ExtArgs>
        fields: Prisma.SwapCompletionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SwapCompletionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapCompletionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SwapCompletionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapCompletionPayload>
          }
          findFirst: {
            args: Prisma.SwapCompletionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapCompletionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SwapCompletionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapCompletionPayload>
          }
          findMany: {
            args: Prisma.SwapCompletionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapCompletionPayload>[]
          }
          create: {
            args: Prisma.SwapCompletionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapCompletionPayload>
          }
          createMany: {
            args: Prisma.SwapCompletionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SwapCompletionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapCompletionPayload>
          }
          update: {
            args: Prisma.SwapCompletionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapCompletionPayload>
          }
          deleteMany: {
            args: Prisma.SwapCompletionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SwapCompletionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SwapCompletionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwapCompletionPayload>
          }
          aggregate: {
            args: Prisma.SwapCompletionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSwapCompletion>
          }
          groupBy: {
            args: Prisma.SwapCompletionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SwapCompletionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SwapCompletionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SwapCompletionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SwapCompletionCountArgs<ExtArgs>
            result: $Utils.Optional<SwapCompletionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    message?: MessageOmit
    refreshToken?: RefreshTokenOmit
    skill?: SkillOmit
    skillCategory?: SkillCategoryOmit
    swapRequest?: SwapRequestOmit
    activeSwap?: ActiveSwapOmit
    swapCompletion?: SwapCompletionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    skills: number
    refreshTokens: number
    sentMessages: number
    receivedMessages: number
    sent_swap_requests: number
    received_swap_requests: number
    active_swaps_as_user1: number
    active_swaps_as_user2: number
    swap_completions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | UserCountOutputTypeCountSkillsArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    sent_swap_requests?: boolean | UserCountOutputTypeCountSent_swap_requestsArgs
    received_swap_requests?: boolean | UserCountOutputTypeCountReceived_swap_requestsArgs
    active_swaps_as_user1?: boolean | UserCountOutputTypeCountActive_swaps_as_user1Args
    active_swaps_as_user2?: boolean | UserCountOutputTypeCountActive_swaps_as_user2Args
    swap_completions?: boolean | UserCountOutputTypeCountSwap_completionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSent_swap_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwapRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceived_swap_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwapRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActive_swaps_as_user1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActiveSwapWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActive_swaps_as_user2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActiveSwapWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSwap_completionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwapCompletionWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    offered_in_requests: number
    requested_in_requests: number
    active_swaps_skill1: number
    active_swaps_skill2: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offered_in_requests?: boolean | SkillCountOutputTypeCountOffered_in_requestsArgs
    requested_in_requests?: boolean | SkillCountOutputTypeCountRequested_in_requestsArgs
    active_swaps_skill1?: boolean | SkillCountOutputTypeCountActive_swaps_skill1Args
    active_swaps_skill2?: boolean | SkillCountOutputTypeCountActive_swaps_skill2Args
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountOffered_in_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwapRequestWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountRequested_in_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwapRequestWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountActive_swaps_skill1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActiveSwapWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountActive_swaps_skill2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActiveSwapWhereInput
  }


  /**
   * Count Type SkillCategoryCountOutputType
   */

  export type SkillCategoryCountOutputType = {
    skills: number
  }

  export type SkillCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | SkillCategoryCountOutputTypeCountSkillsArgs
  }

  // Custom InputTypes
  /**
   * SkillCategoryCountOutputType without action
   */
  export type SkillCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategoryCountOutputType
     */
    select?: SkillCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCategoryCountOutputType without action
   */
  export type SkillCategoryCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }


  /**
   * Count Type ActiveSwapCountOutputType
   */

  export type ActiveSwapCountOutputType = {
    completions: number
  }

  export type ActiveSwapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completions?: boolean | ActiveSwapCountOutputTypeCountCompletionsArgs
  }

  // Custom InputTypes
  /**
   * ActiveSwapCountOutputType without action
   */
  export type ActiveSwapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSwapCountOutputType
     */
    select?: ActiveSwapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActiveSwapCountOutputType without action
   */
  export type ActiveSwapCountOutputTypeCountCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwapCompletionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
    is_admin: boolean | null
    is_super_admin: boolean | null
    is_verified: boolean | null
    otp: string | null
    otp_expiry: Date | null
    reset_token: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
    is_admin: boolean | null
    is_super_admin: boolean | null
    is_verified: boolean | null
    otp: string | null
    otp_expiry: Date | null
    reset_token: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    created_at: number
    updated_at: number
    is_admin: number
    is_super_admin: number
    is_verified: number
    otp: number
    otp_expiry: number
    reset_token: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    is_admin?: true
    is_super_admin?: true
    is_verified?: true
    otp?: true
    otp_expiry?: true
    reset_token?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    is_admin?: true
    is_super_admin?: true
    is_verified?: true
    otp?: true
    otp_expiry?: true
    reset_token?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    is_admin?: true
    is_super_admin?: true
    is_verified?: true
    otp?: true
    otp_expiry?: true
    reset_token?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    created_at: Date
    updated_at: Date
    is_admin: boolean
    is_super_admin: boolean
    is_verified: boolean
    otp: string | null
    otp_expiry: Date | null
    reset_token: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: boolean
    otp_expiry?: boolean
    reset_token?: boolean
    skills?: boolean | User$skillsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    sent_swap_requests?: boolean | User$sent_swap_requestsArgs<ExtArgs>
    received_swap_requests?: boolean | User$received_swap_requestsArgs<ExtArgs>
    active_swaps_as_user1?: boolean | User$active_swaps_as_user1Args<ExtArgs>
    active_swaps_as_user2?: boolean | User$active_swaps_as_user2Args<ExtArgs>
    swap_completions?: boolean | User$swap_completionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: boolean
    otp_expiry?: boolean
    reset_token?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "created_at" | "updated_at" | "is_admin" | "is_super_admin" | "is_verified" | "otp" | "otp_expiry" | "reset_token", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | User$skillsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    sent_swap_requests?: boolean | User$sent_swap_requestsArgs<ExtArgs>
    received_swap_requests?: boolean | User$received_swap_requestsArgs<ExtArgs>
    active_swaps_as_user1?: boolean | User$active_swaps_as_user1Args<ExtArgs>
    active_swaps_as_user2?: boolean | User$active_swaps_as_user2Args<ExtArgs>
    swap_completions?: boolean | User$swap_completionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      skills: Prisma.$SkillPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
      sent_swap_requests: Prisma.$SwapRequestPayload<ExtArgs>[]
      received_swap_requests: Prisma.$SwapRequestPayload<ExtArgs>[]
      active_swaps_as_user1: Prisma.$ActiveSwapPayload<ExtArgs>[]
      active_swaps_as_user2: Prisma.$ActiveSwapPayload<ExtArgs>[]
      swap_completions: Prisma.$SwapCompletionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      created_at: Date
      updated_at: Date
      is_admin: boolean
      is_super_admin: boolean
      is_verified: boolean
      otp: string | null
      otp_expiry: Date | null
      reset_token: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skills<T extends User$skillsArgs<ExtArgs> = {}>(args?: Subset<T, User$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sent_swap_requests<T extends User$sent_swap_requestsArgs<ExtArgs> = {}>(args?: Subset<T, User$sent_swap_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    received_swap_requests<T extends User$received_swap_requestsArgs<ExtArgs> = {}>(args?: Subset<T, User$received_swap_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    active_swaps_as_user1<T extends User$active_swaps_as_user1Args<ExtArgs> = {}>(args?: Subset<T, User$active_swaps_as_user1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveSwapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    active_swaps_as_user2<T extends User$active_swaps_as_user2Args<ExtArgs> = {}>(args?: Subset<T, User$active_swaps_as_user2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveSwapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    swap_completions<T extends User$swap_completionsArgs<ExtArgs> = {}>(args?: Subset<T, User$swap_completionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwapCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly is_admin: FieldRef<"User", 'Boolean'>
    readonly is_super_admin: FieldRef<"User", 'Boolean'>
    readonly is_verified: FieldRef<"User", 'Boolean'>
    readonly otp: FieldRef<"User", 'String'>
    readonly otp_expiry: FieldRef<"User", 'DateTime'>
    readonly reset_token: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.skills
   */
  export type User$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.sent_swap_requests
   */
  export type User$sent_swap_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    where?: SwapRequestWhereInput
    orderBy?: SwapRequestOrderByWithRelationInput | SwapRequestOrderByWithRelationInput[]
    cursor?: SwapRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwapRequestScalarFieldEnum | SwapRequestScalarFieldEnum[]
  }

  /**
   * User.received_swap_requests
   */
  export type User$received_swap_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    where?: SwapRequestWhereInput
    orderBy?: SwapRequestOrderByWithRelationInput | SwapRequestOrderByWithRelationInput[]
    cursor?: SwapRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwapRequestScalarFieldEnum | SwapRequestScalarFieldEnum[]
  }

  /**
   * User.active_swaps_as_user1
   */
  export type User$active_swaps_as_user1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSwap
     */
    select?: ActiveSwapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSwap
     */
    omit?: ActiveSwapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSwapInclude<ExtArgs> | null
    where?: ActiveSwapWhereInput
    orderBy?: ActiveSwapOrderByWithRelationInput | ActiveSwapOrderByWithRelationInput[]
    cursor?: ActiveSwapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActiveSwapScalarFieldEnum | ActiveSwapScalarFieldEnum[]
  }

  /**
   * User.active_swaps_as_user2
   */
  export type User$active_swaps_as_user2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSwap
     */
    select?: ActiveSwapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSwap
     */
    omit?: ActiveSwapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSwapInclude<ExtArgs> | null
    where?: ActiveSwapWhereInput
    orderBy?: ActiveSwapOrderByWithRelationInput | ActiveSwapOrderByWithRelationInput[]
    cursor?: ActiveSwapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActiveSwapScalarFieldEnum | ActiveSwapScalarFieldEnum[]
  }

  /**
   * User.swap_completions
   */
  export type User$swap_completionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapCompletion
     */
    select?: SwapCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapCompletion
     */
    omit?: SwapCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapCompletionInclude<ExtArgs> | null
    where?: SwapCompletionWhereInput
    orderBy?: SwapCompletionOrderByWithRelationInput | SwapCompletionOrderByWithRelationInput[]
    cursor?: SwapCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwapCompletionScalarFieldEnum | SwapCompletionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    sender_id: string | null
    receiver_id: string | null
    timestamp: Date | null
    read: boolean | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    sender_id: string | null
    receiver_id: string | null
    timestamp: Date | null
    read: boolean | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    sender_id: number
    receiver_id: number
    timestamp: number
    read: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    sender_id?: true
    receiver_id?: true
    timestamp?: true
    read?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    sender_id?: true
    receiver_id?: true
    timestamp?: true
    read?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    sender_id?: true
    receiver_id?: true
    timestamp?: true
    read?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    sender_id: string
    receiver_id: string
    timestamp: Date
    read: boolean
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    timestamp?: boolean
    read?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>



  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    timestamp?: boolean
    read?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "sender_id" | "receiver_id" | "timestamp" | "read", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      sender_id: string
      receiver_id: string
      timestamp: Date
      read: boolean
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * @param {MessageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const message = await prisma.message.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MessageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Message.
     * @param {MessageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const message = await prisma.message.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MessageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly sender_id: FieldRef<"Message", 'String'>
    readonly receiver_id: FieldRef<"Message", 'String'>
    readonly timestamp: FieldRef<"Message", 'DateTime'>
    readonly read: FieldRef<"Message", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message findRaw
   */
  export type MessageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Message aggregateRaw
   */
  export type MessageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    user_id: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    user_id: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    user_id: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    user_id?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    user_id?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    user_id?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    user_id: string
    expiresAt: Date
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    user_id?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>



  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    user_id?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "user_id" | "expiresAt" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      user_id: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * @param {RefreshTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const refreshToken = await prisma.refreshToken.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RefreshTokenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RefreshToken.
     * @param {RefreshTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const refreshToken = await prisma.refreshToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RefreshTokenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly user_id: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken findRaw
   */
  export type RefreshTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RefreshToken aggregateRaw
   */
  export type RefreshTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    level: $Enums.Level | null
    achievement: string | null
    user_id: string | null
    category_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    level: $Enums.Level | null
    achievement: string | null
    user_id: string | null
    category_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    title: number
    description: number
    level: number
    achievement: number
    user_id: number
    category_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    achievement?: true
    user_id?: true
    category_id?: true
    created_at?: true
    updated_at?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    achievement?: true
    user_id?: true
    category_id?: true
    created_at?: true
    updated_at?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    achievement?: true
    user_id?: true
    category_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    title: string
    description: string | null
    level: $Enums.Level
    achievement: string | null
    user_id: string | null
    category_id: string
    created_at: Date
    updated_at: Date
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    achievement?: boolean
    user_id?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | Skill$userArgs<ExtArgs>
    category?: boolean | SkillCategoryDefaultArgs<ExtArgs>
    offered_in_requests?: boolean | Skill$offered_in_requestsArgs<ExtArgs>
    requested_in_requests?: boolean | Skill$requested_in_requestsArgs<ExtArgs>
    active_swaps_skill1?: boolean | Skill$active_swaps_skill1Args<ExtArgs>
    active_swaps_skill2?: boolean | Skill$active_swaps_skill2Args<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>



  export type SkillSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    achievement?: boolean
    user_id?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "level" | "achievement" | "user_id" | "category_id" | "created_at" | "updated_at", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Skill$userArgs<ExtArgs>
    category?: boolean | SkillCategoryDefaultArgs<ExtArgs>
    offered_in_requests?: boolean | Skill$offered_in_requestsArgs<ExtArgs>
    requested_in_requests?: boolean | Skill$requested_in_requestsArgs<ExtArgs>
    active_swaps_skill1?: boolean | Skill$active_swaps_skill1Args<ExtArgs>
    active_swaps_skill2?: boolean | Skill$active_swaps_skill2Args<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      category: Prisma.$SkillCategoryPayload<ExtArgs>
      offered_in_requests: Prisma.$SwapRequestPayload<ExtArgs>[]
      requested_in_requests: Prisma.$SwapRequestPayload<ExtArgs>[]
      active_swaps_skill1: Prisma.$ActiveSwapPayload<ExtArgs>[]
      active_swaps_skill2: Prisma.$ActiveSwapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      level: $Enums.Level
      achievement: string | null
      user_id: string | null
      category_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * @param {SkillFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const skill = await prisma.skill.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SkillFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Skill.
     * @param {SkillAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const skill = await prisma.skill.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SkillAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Skill$userArgs<ExtArgs> = {}>(args?: Subset<T, Skill$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends SkillCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillCategoryDefaultArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    offered_in_requests<T extends Skill$offered_in_requestsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$offered_in_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requested_in_requests<T extends Skill$requested_in_requestsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$requested_in_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    active_swaps_skill1<T extends Skill$active_swaps_skill1Args<ExtArgs> = {}>(args?: Subset<T, Skill$active_swaps_skill1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveSwapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    active_swaps_skill2<T extends Skill$active_swaps_skill2Args<ExtArgs> = {}>(args?: Subset<T, Skill$active_swaps_skill2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveSwapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly title: FieldRef<"Skill", 'String'>
    readonly description: FieldRef<"Skill", 'String'>
    readonly level: FieldRef<"Skill", 'Level'>
    readonly achievement: FieldRef<"Skill", 'String'>
    readonly user_id: FieldRef<"Skill", 'String'>
    readonly category_id: FieldRef<"Skill", 'String'>
    readonly created_at: FieldRef<"Skill", 'DateTime'>
    readonly updated_at: FieldRef<"Skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill findRaw
   */
  export type SkillFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Skill aggregateRaw
   */
  export type SkillAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Skill.user
   */
  export type Skill$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Skill.offered_in_requests
   */
  export type Skill$offered_in_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    where?: SwapRequestWhereInput
    orderBy?: SwapRequestOrderByWithRelationInput | SwapRequestOrderByWithRelationInput[]
    cursor?: SwapRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwapRequestScalarFieldEnum | SwapRequestScalarFieldEnum[]
  }

  /**
   * Skill.requested_in_requests
   */
  export type Skill$requested_in_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    where?: SwapRequestWhereInput
    orderBy?: SwapRequestOrderByWithRelationInput | SwapRequestOrderByWithRelationInput[]
    cursor?: SwapRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwapRequestScalarFieldEnum | SwapRequestScalarFieldEnum[]
  }

  /**
   * Skill.active_swaps_skill1
   */
  export type Skill$active_swaps_skill1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSwap
     */
    select?: ActiveSwapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSwap
     */
    omit?: ActiveSwapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSwapInclude<ExtArgs> | null
    where?: ActiveSwapWhereInput
    orderBy?: ActiveSwapOrderByWithRelationInput | ActiveSwapOrderByWithRelationInput[]
    cursor?: ActiveSwapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActiveSwapScalarFieldEnum | ActiveSwapScalarFieldEnum[]
  }

  /**
   * Skill.active_swaps_skill2
   */
  export type Skill$active_swaps_skill2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSwap
     */
    select?: ActiveSwapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSwap
     */
    omit?: ActiveSwapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSwapInclude<ExtArgs> | null
    where?: ActiveSwapWhereInput
    orderBy?: ActiveSwapOrderByWithRelationInput | ActiveSwapOrderByWithRelationInput[]
    cursor?: ActiveSwapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActiveSwapScalarFieldEnum | ActiveSwapScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model SkillCategory
   */

  export type AggregateSkillCategory = {
    _count: SkillCategoryCountAggregateOutputType | null
    _min: SkillCategoryMinAggregateOutputType | null
    _max: SkillCategoryMaxAggregateOutputType | null
  }

  export type SkillCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SkillCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SkillCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SkillCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SkillCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SkillCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SkillCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillCategory to aggregate.
     */
    where?: SkillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillCategories to fetch.
     */
    orderBy?: SkillCategoryOrderByWithRelationInput | SkillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillCategories
    **/
    _count?: true | SkillCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillCategoryMaxAggregateInputType
  }

  export type GetSkillCategoryAggregateType<T extends SkillCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillCategory[P]>
      : GetScalarType<T[P], AggregateSkillCategory[P]>
  }




  export type SkillCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillCategoryWhereInput
    orderBy?: SkillCategoryOrderByWithAggregationInput | SkillCategoryOrderByWithAggregationInput[]
    by: SkillCategoryScalarFieldEnum[] | SkillCategoryScalarFieldEnum
    having?: SkillCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCategoryCountAggregateInputType | true
    _min?: SkillCategoryMinAggregateInputType
    _max?: SkillCategoryMaxAggregateInputType
  }

  export type SkillCategoryGroupByOutputType = {
    id: string
    name: string
    _count: SkillCategoryCountAggregateOutputType | null
    _min: SkillCategoryMinAggregateOutputType | null
    _max: SkillCategoryMaxAggregateOutputType | null
  }

  type GetSkillCategoryGroupByPayload<T extends SkillCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SkillCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SkillCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    skills?: boolean | SkillCategory$skillsArgs<ExtArgs>
    _count?: boolean | SkillCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillCategory"]>



  export type SkillCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SkillCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["skillCategory"]>
  export type SkillCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | SkillCategory$skillsArgs<ExtArgs>
    _count?: boolean | SkillCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SkillCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillCategory"
    objects: {
      skills: Prisma.$SkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["skillCategory"]>
    composites: {}
  }

  type SkillCategoryGetPayload<S extends boolean | null | undefined | SkillCategoryDefaultArgs> = $Result.GetResult<Prisma.$SkillCategoryPayload, S>

  type SkillCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCategoryCountAggregateInputType | true
    }

  export interface SkillCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillCategory'], meta: { name: 'SkillCategory' } }
    /**
     * Find zero or one SkillCategory that matches the filter.
     * @param {SkillCategoryFindUniqueArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillCategoryFindUniqueArgs>(args: SelectSubset<T, SkillCategoryFindUniqueArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillCategoryFindUniqueOrThrowArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryFindFirstArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillCategoryFindFirstArgs>(args?: SelectSubset<T, SkillCategoryFindFirstArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryFindFirstOrThrowArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillCategories
     * const skillCategories = await prisma.skillCategory.findMany()
     * 
     * // Get first 10 SkillCategories
     * const skillCategories = await prisma.skillCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillCategoryWithIdOnly = await prisma.skillCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillCategoryFindManyArgs>(args?: SelectSubset<T, SkillCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillCategory.
     * @param {SkillCategoryCreateArgs} args - Arguments to create a SkillCategory.
     * @example
     * // Create one SkillCategory
     * const SkillCategory = await prisma.skillCategory.create({
     *   data: {
     *     // ... data to create a SkillCategory
     *   }
     * })
     * 
     */
    create<T extends SkillCategoryCreateArgs>(args: SelectSubset<T, SkillCategoryCreateArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillCategories.
     * @param {SkillCategoryCreateManyArgs} args - Arguments to create many SkillCategories.
     * @example
     * // Create many SkillCategories
     * const skillCategory = await prisma.skillCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCategoryCreateManyArgs>(args?: SelectSubset<T, SkillCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SkillCategory.
     * @param {SkillCategoryDeleteArgs} args - Arguments to delete one SkillCategory.
     * @example
     * // Delete one SkillCategory
     * const SkillCategory = await prisma.skillCategory.delete({
     *   where: {
     *     // ... filter to delete one SkillCategory
     *   }
     * })
     * 
     */
    delete<T extends SkillCategoryDeleteArgs>(args: SelectSubset<T, SkillCategoryDeleteArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillCategory.
     * @param {SkillCategoryUpdateArgs} args - Arguments to update one SkillCategory.
     * @example
     * // Update one SkillCategory
     * const skillCategory = await prisma.skillCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillCategoryUpdateArgs>(args: SelectSubset<T, SkillCategoryUpdateArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillCategories.
     * @param {SkillCategoryDeleteManyArgs} args - Arguments to filter SkillCategories to delete.
     * @example
     * // Delete a few SkillCategories
     * const { count } = await prisma.skillCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillCategoryDeleteManyArgs>(args?: SelectSubset<T, SkillCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillCategories
     * const skillCategory = await prisma.skillCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillCategoryUpdateManyArgs>(args: SelectSubset<T, SkillCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SkillCategory.
     * @param {SkillCategoryUpsertArgs} args - Arguments to update or create a SkillCategory.
     * @example
     * // Update or create a SkillCategory
     * const skillCategory = await prisma.skillCategory.upsert({
     *   create: {
     *     // ... data to create a SkillCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillCategory we want to update
     *   }
     * })
     */
    upsert<T extends SkillCategoryUpsertArgs>(args: SelectSubset<T, SkillCategoryUpsertArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillCategories that matches the filter.
     * @param {SkillCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const skillCategory = await prisma.skillCategory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SkillCategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SkillCategory.
     * @param {SkillCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const skillCategory = await prisma.skillCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SkillCategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SkillCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryCountArgs} args - Arguments to filter SkillCategories to count.
     * @example
     * // Count the number of SkillCategories
     * const count = await prisma.skillCategory.count({
     *   where: {
     *     // ... the filter for the SkillCategories we want to count
     *   }
     * })
    **/
    count<T extends SkillCategoryCountArgs>(
      args?: Subset<T, SkillCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillCategoryAggregateArgs>(args: Subset<T, SkillCategoryAggregateArgs>): Prisma.PrismaPromise<GetSkillCategoryAggregateType<T>>

    /**
     * Group by SkillCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SkillCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillCategory model
   */
  readonly fields: SkillCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skills<T extends SkillCategory$skillsArgs<ExtArgs> = {}>(args?: Subset<T, SkillCategory$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SkillCategory model
   */
  interface SkillCategoryFieldRefs {
    readonly id: FieldRef<"SkillCategory", 'String'>
    readonly name: FieldRef<"SkillCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SkillCategory findUnique
   */
  export type SkillCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategory to fetch.
     */
    where: SkillCategoryWhereUniqueInput
  }

  /**
   * SkillCategory findUniqueOrThrow
   */
  export type SkillCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategory to fetch.
     */
    where: SkillCategoryWhereUniqueInput
  }

  /**
   * SkillCategory findFirst
   */
  export type SkillCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategory to fetch.
     */
    where?: SkillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillCategories to fetch.
     */
    orderBy?: SkillCategoryOrderByWithRelationInput | SkillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillCategories.
     */
    cursor?: SkillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillCategories.
     */
    distinct?: SkillCategoryScalarFieldEnum | SkillCategoryScalarFieldEnum[]
  }

  /**
   * SkillCategory findFirstOrThrow
   */
  export type SkillCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategory to fetch.
     */
    where?: SkillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillCategories to fetch.
     */
    orderBy?: SkillCategoryOrderByWithRelationInput | SkillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillCategories.
     */
    cursor?: SkillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillCategories.
     */
    distinct?: SkillCategoryScalarFieldEnum | SkillCategoryScalarFieldEnum[]
  }

  /**
   * SkillCategory findMany
   */
  export type SkillCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategories to fetch.
     */
    where?: SkillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillCategories to fetch.
     */
    orderBy?: SkillCategoryOrderByWithRelationInput | SkillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillCategories.
     */
    cursor?: SkillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillCategories.
     */
    skip?: number
    distinct?: SkillCategoryScalarFieldEnum | SkillCategoryScalarFieldEnum[]
  }

  /**
   * SkillCategory create
   */
  export type SkillCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SkillCategory.
     */
    data: XOR<SkillCategoryCreateInput, SkillCategoryUncheckedCreateInput>
  }

  /**
   * SkillCategory createMany
   */
  export type SkillCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillCategories.
     */
    data: SkillCategoryCreateManyInput | SkillCategoryCreateManyInput[]
  }

  /**
   * SkillCategory update
   */
  export type SkillCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SkillCategory.
     */
    data: XOR<SkillCategoryUpdateInput, SkillCategoryUncheckedUpdateInput>
    /**
     * Choose, which SkillCategory to update.
     */
    where: SkillCategoryWhereUniqueInput
  }

  /**
   * SkillCategory updateMany
   */
  export type SkillCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillCategories.
     */
    data: XOR<SkillCategoryUpdateManyMutationInput, SkillCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SkillCategories to update
     */
    where?: SkillCategoryWhereInput
    /**
     * Limit how many SkillCategories to update.
     */
    limit?: number
  }

  /**
   * SkillCategory upsert
   */
  export type SkillCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SkillCategory to update in case it exists.
     */
    where: SkillCategoryWhereUniqueInput
    /**
     * In case the SkillCategory found by the `where` argument doesn't exist, create a new SkillCategory with this data.
     */
    create: XOR<SkillCategoryCreateInput, SkillCategoryUncheckedCreateInput>
    /**
     * In case the SkillCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillCategoryUpdateInput, SkillCategoryUncheckedUpdateInput>
  }

  /**
   * SkillCategory delete
   */
  export type SkillCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter which SkillCategory to delete.
     */
    where: SkillCategoryWhereUniqueInput
  }

  /**
   * SkillCategory deleteMany
   */
  export type SkillCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillCategories to delete
     */
    where?: SkillCategoryWhereInput
    /**
     * Limit how many SkillCategories to delete.
     */
    limit?: number
  }

  /**
   * SkillCategory findRaw
   */
  export type SkillCategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SkillCategory aggregateRaw
   */
  export type SkillCategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SkillCategory.skills
   */
  export type SkillCategory$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * SkillCategory without action
   */
  export type SkillCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
  }


  /**
   * Model SwapRequest
   */

  export type AggregateSwapRequest = {
    _count: SwapRequestCountAggregateOutputType | null
    _min: SwapRequestMinAggregateOutputType | null
    _max: SwapRequestMaxAggregateOutputType | null
  }

  export type SwapRequestMinAggregateOutputType = {
    id: string | null
    sender_id: string | null
    receiver_id: string | null
    offered_skill_id: string | null
    requested_skill_id: string | null
    message: string | null
    status: $Enums.SwapStatus | null
    rejection_reason: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SwapRequestMaxAggregateOutputType = {
    id: string | null
    sender_id: string | null
    receiver_id: string | null
    offered_skill_id: string | null
    requested_skill_id: string | null
    message: string | null
    status: $Enums.SwapStatus | null
    rejection_reason: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SwapRequestCountAggregateOutputType = {
    id: number
    sender_id: number
    receiver_id: number
    offered_skill_id: number
    requested_skill_id: number
    message: number
    status: number
    rejection_reason: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SwapRequestMinAggregateInputType = {
    id?: true
    sender_id?: true
    receiver_id?: true
    offered_skill_id?: true
    requested_skill_id?: true
    message?: true
    status?: true
    rejection_reason?: true
    created_at?: true
    updated_at?: true
  }

  export type SwapRequestMaxAggregateInputType = {
    id?: true
    sender_id?: true
    receiver_id?: true
    offered_skill_id?: true
    requested_skill_id?: true
    message?: true
    status?: true
    rejection_reason?: true
    created_at?: true
    updated_at?: true
  }

  export type SwapRequestCountAggregateInputType = {
    id?: true
    sender_id?: true
    receiver_id?: true
    offered_skill_id?: true
    requested_skill_id?: true
    message?: true
    status?: true
    rejection_reason?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SwapRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SwapRequest to aggregate.
     */
    where?: SwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwapRequests to fetch.
     */
    orderBy?: SwapRequestOrderByWithRelationInput | SwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwapRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SwapRequests
    **/
    _count?: true | SwapRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SwapRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SwapRequestMaxAggregateInputType
  }

  export type GetSwapRequestAggregateType<T extends SwapRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateSwapRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSwapRequest[P]>
      : GetScalarType<T[P], AggregateSwapRequest[P]>
  }




  export type SwapRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwapRequestWhereInput
    orderBy?: SwapRequestOrderByWithAggregationInput | SwapRequestOrderByWithAggregationInput[]
    by: SwapRequestScalarFieldEnum[] | SwapRequestScalarFieldEnum
    having?: SwapRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SwapRequestCountAggregateInputType | true
    _min?: SwapRequestMinAggregateInputType
    _max?: SwapRequestMaxAggregateInputType
  }

  export type SwapRequestGroupByOutputType = {
    id: string
    sender_id: string
    receiver_id: string
    offered_skill_id: string
    requested_skill_id: string
    message: string | null
    status: $Enums.SwapStatus
    rejection_reason: string | null
    created_at: Date
    updated_at: Date
    _count: SwapRequestCountAggregateOutputType | null
    _min: SwapRequestMinAggregateOutputType | null
    _max: SwapRequestMaxAggregateOutputType | null
  }

  type GetSwapRequestGroupByPayload<T extends SwapRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SwapRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SwapRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SwapRequestGroupByOutputType[P]>
            : GetScalarType<T[P], SwapRequestGroupByOutputType[P]>
        }
      >
    >


  export type SwapRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    offered_skill_id?: boolean
    requested_skill_id?: boolean
    message?: boolean
    status?: boolean
    rejection_reason?: boolean
    created_at?: boolean
    updated_at?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    offered_skill?: boolean | SkillDefaultArgs<ExtArgs>
    requested_skill?: boolean | SkillDefaultArgs<ExtArgs>
    active_swap?: boolean | SwapRequest$active_swapArgs<ExtArgs>
  }, ExtArgs["result"]["swapRequest"]>



  export type SwapRequestSelectScalar = {
    id?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    offered_skill_id?: boolean
    requested_skill_id?: boolean
    message?: boolean
    status?: boolean
    rejection_reason?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SwapRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sender_id" | "receiver_id" | "offered_skill_id" | "requested_skill_id" | "message" | "status" | "rejection_reason" | "created_at" | "updated_at", ExtArgs["result"]["swapRequest"]>
  export type SwapRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    offered_skill?: boolean | SkillDefaultArgs<ExtArgs>
    requested_skill?: boolean | SkillDefaultArgs<ExtArgs>
    active_swap?: boolean | SwapRequest$active_swapArgs<ExtArgs>
  }

  export type $SwapRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SwapRequest"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
      offered_skill: Prisma.$SkillPayload<ExtArgs>
      requested_skill: Prisma.$SkillPayload<ExtArgs>
      active_swap: Prisma.$ActiveSwapPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sender_id: string
      receiver_id: string
      offered_skill_id: string
      requested_skill_id: string
      message: string | null
      status: $Enums.SwapStatus
      rejection_reason: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["swapRequest"]>
    composites: {}
  }

  type SwapRequestGetPayload<S extends boolean | null | undefined | SwapRequestDefaultArgs> = $Result.GetResult<Prisma.$SwapRequestPayload, S>

  type SwapRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SwapRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SwapRequestCountAggregateInputType | true
    }

  export interface SwapRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SwapRequest'], meta: { name: 'SwapRequest' } }
    /**
     * Find zero or one SwapRequest that matches the filter.
     * @param {SwapRequestFindUniqueArgs} args - Arguments to find a SwapRequest
     * @example
     * // Get one SwapRequest
     * const swapRequest = await prisma.swapRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SwapRequestFindUniqueArgs>(args: SelectSubset<T, SwapRequestFindUniqueArgs<ExtArgs>>): Prisma__SwapRequestClient<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SwapRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SwapRequestFindUniqueOrThrowArgs} args - Arguments to find a SwapRequest
     * @example
     * // Get one SwapRequest
     * const swapRequest = await prisma.swapRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SwapRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, SwapRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SwapRequestClient<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SwapRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapRequestFindFirstArgs} args - Arguments to find a SwapRequest
     * @example
     * // Get one SwapRequest
     * const swapRequest = await prisma.swapRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SwapRequestFindFirstArgs>(args?: SelectSubset<T, SwapRequestFindFirstArgs<ExtArgs>>): Prisma__SwapRequestClient<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SwapRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapRequestFindFirstOrThrowArgs} args - Arguments to find a SwapRequest
     * @example
     * // Get one SwapRequest
     * const swapRequest = await prisma.swapRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SwapRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, SwapRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__SwapRequestClient<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SwapRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SwapRequests
     * const swapRequests = await prisma.swapRequest.findMany()
     * 
     * // Get first 10 SwapRequests
     * const swapRequests = await prisma.swapRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const swapRequestWithIdOnly = await prisma.swapRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SwapRequestFindManyArgs>(args?: SelectSubset<T, SwapRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SwapRequest.
     * @param {SwapRequestCreateArgs} args - Arguments to create a SwapRequest.
     * @example
     * // Create one SwapRequest
     * const SwapRequest = await prisma.swapRequest.create({
     *   data: {
     *     // ... data to create a SwapRequest
     *   }
     * })
     * 
     */
    create<T extends SwapRequestCreateArgs>(args: SelectSubset<T, SwapRequestCreateArgs<ExtArgs>>): Prisma__SwapRequestClient<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SwapRequests.
     * @param {SwapRequestCreateManyArgs} args - Arguments to create many SwapRequests.
     * @example
     * // Create many SwapRequests
     * const swapRequest = await prisma.swapRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SwapRequestCreateManyArgs>(args?: SelectSubset<T, SwapRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SwapRequest.
     * @param {SwapRequestDeleteArgs} args - Arguments to delete one SwapRequest.
     * @example
     * // Delete one SwapRequest
     * const SwapRequest = await prisma.swapRequest.delete({
     *   where: {
     *     // ... filter to delete one SwapRequest
     *   }
     * })
     * 
     */
    delete<T extends SwapRequestDeleteArgs>(args: SelectSubset<T, SwapRequestDeleteArgs<ExtArgs>>): Prisma__SwapRequestClient<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SwapRequest.
     * @param {SwapRequestUpdateArgs} args - Arguments to update one SwapRequest.
     * @example
     * // Update one SwapRequest
     * const swapRequest = await prisma.swapRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SwapRequestUpdateArgs>(args: SelectSubset<T, SwapRequestUpdateArgs<ExtArgs>>): Prisma__SwapRequestClient<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SwapRequests.
     * @param {SwapRequestDeleteManyArgs} args - Arguments to filter SwapRequests to delete.
     * @example
     * // Delete a few SwapRequests
     * const { count } = await prisma.swapRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SwapRequestDeleteManyArgs>(args?: SelectSubset<T, SwapRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SwapRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SwapRequests
     * const swapRequest = await prisma.swapRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SwapRequestUpdateManyArgs>(args: SelectSubset<T, SwapRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SwapRequest.
     * @param {SwapRequestUpsertArgs} args - Arguments to update or create a SwapRequest.
     * @example
     * // Update or create a SwapRequest
     * const swapRequest = await prisma.swapRequest.upsert({
     *   create: {
     *     // ... data to create a SwapRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SwapRequest we want to update
     *   }
     * })
     */
    upsert<T extends SwapRequestUpsertArgs>(args: SelectSubset<T, SwapRequestUpsertArgs<ExtArgs>>): Prisma__SwapRequestClient<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SwapRequests that matches the filter.
     * @param {SwapRequestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const swapRequest = await prisma.swapRequest.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SwapRequestFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SwapRequest.
     * @param {SwapRequestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const swapRequest = await prisma.swapRequest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SwapRequestAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SwapRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapRequestCountArgs} args - Arguments to filter SwapRequests to count.
     * @example
     * // Count the number of SwapRequests
     * const count = await prisma.swapRequest.count({
     *   where: {
     *     // ... the filter for the SwapRequests we want to count
     *   }
     * })
    **/
    count<T extends SwapRequestCountArgs>(
      args?: Subset<T, SwapRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SwapRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SwapRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SwapRequestAggregateArgs>(args: Subset<T, SwapRequestAggregateArgs>): Prisma.PrismaPromise<GetSwapRequestAggregateType<T>>

    /**
     * Group by SwapRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SwapRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SwapRequestGroupByArgs['orderBy'] }
        : { orderBy?: SwapRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SwapRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSwapRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SwapRequest model
   */
  readonly fields: SwapRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SwapRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SwapRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    offered_skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requested_skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    active_swap<T extends SwapRequest$active_swapArgs<ExtArgs> = {}>(args?: Subset<T, SwapRequest$active_swapArgs<ExtArgs>>): Prisma__ActiveSwapClient<$Result.GetResult<Prisma.$ActiveSwapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SwapRequest model
   */
  interface SwapRequestFieldRefs {
    readonly id: FieldRef<"SwapRequest", 'String'>
    readonly sender_id: FieldRef<"SwapRequest", 'String'>
    readonly receiver_id: FieldRef<"SwapRequest", 'String'>
    readonly offered_skill_id: FieldRef<"SwapRequest", 'String'>
    readonly requested_skill_id: FieldRef<"SwapRequest", 'String'>
    readonly message: FieldRef<"SwapRequest", 'String'>
    readonly status: FieldRef<"SwapRequest", 'SwapStatus'>
    readonly rejection_reason: FieldRef<"SwapRequest", 'String'>
    readonly created_at: FieldRef<"SwapRequest", 'DateTime'>
    readonly updated_at: FieldRef<"SwapRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SwapRequest findUnique
   */
  export type SwapRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which SwapRequest to fetch.
     */
    where: SwapRequestWhereUniqueInput
  }

  /**
   * SwapRequest findUniqueOrThrow
   */
  export type SwapRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which SwapRequest to fetch.
     */
    where: SwapRequestWhereUniqueInput
  }

  /**
   * SwapRequest findFirst
   */
  export type SwapRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which SwapRequest to fetch.
     */
    where?: SwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwapRequests to fetch.
     */
    orderBy?: SwapRequestOrderByWithRelationInput | SwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SwapRequests.
     */
    cursor?: SwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwapRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SwapRequests.
     */
    distinct?: SwapRequestScalarFieldEnum | SwapRequestScalarFieldEnum[]
  }

  /**
   * SwapRequest findFirstOrThrow
   */
  export type SwapRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which SwapRequest to fetch.
     */
    where?: SwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwapRequests to fetch.
     */
    orderBy?: SwapRequestOrderByWithRelationInput | SwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SwapRequests.
     */
    cursor?: SwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwapRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SwapRequests.
     */
    distinct?: SwapRequestScalarFieldEnum | SwapRequestScalarFieldEnum[]
  }

  /**
   * SwapRequest findMany
   */
  export type SwapRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which SwapRequests to fetch.
     */
    where?: SwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwapRequests to fetch.
     */
    orderBy?: SwapRequestOrderByWithRelationInput | SwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SwapRequests.
     */
    cursor?: SwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwapRequests.
     */
    skip?: number
    distinct?: SwapRequestScalarFieldEnum | SwapRequestScalarFieldEnum[]
  }

  /**
   * SwapRequest create
   */
  export type SwapRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a SwapRequest.
     */
    data: XOR<SwapRequestCreateInput, SwapRequestUncheckedCreateInput>
  }

  /**
   * SwapRequest createMany
   */
  export type SwapRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SwapRequests.
     */
    data: SwapRequestCreateManyInput | SwapRequestCreateManyInput[]
  }

  /**
   * SwapRequest update
   */
  export type SwapRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a SwapRequest.
     */
    data: XOR<SwapRequestUpdateInput, SwapRequestUncheckedUpdateInput>
    /**
     * Choose, which SwapRequest to update.
     */
    where: SwapRequestWhereUniqueInput
  }

  /**
   * SwapRequest updateMany
   */
  export type SwapRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SwapRequests.
     */
    data: XOR<SwapRequestUpdateManyMutationInput, SwapRequestUncheckedUpdateManyInput>
    /**
     * Filter which SwapRequests to update
     */
    where?: SwapRequestWhereInput
    /**
     * Limit how many SwapRequests to update.
     */
    limit?: number
  }

  /**
   * SwapRequest upsert
   */
  export type SwapRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the SwapRequest to update in case it exists.
     */
    where: SwapRequestWhereUniqueInput
    /**
     * In case the SwapRequest found by the `where` argument doesn't exist, create a new SwapRequest with this data.
     */
    create: XOR<SwapRequestCreateInput, SwapRequestUncheckedCreateInput>
    /**
     * In case the SwapRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SwapRequestUpdateInput, SwapRequestUncheckedUpdateInput>
  }

  /**
   * SwapRequest delete
   */
  export type SwapRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
    /**
     * Filter which SwapRequest to delete.
     */
    where: SwapRequestWhereUniqueInput
  }

  /**
   * SwapRequest deleteMany
   */
  export type SwapRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SwapRequests to delete
     */
    where?: SwapRequestWhereInput
    /**
     * Limit how many SwapRequests to delete.
     */
    limit?: number
  }

  /**
   * SwapRequest findRaw
   */
  export type SwapRequestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SwapRequest aggregateRaw
   */
  export type SwapRequestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SwapRequest.active_swap
   */
  export type SwapRequest$active_swapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSwap
     */
    select?: ActiveSwapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSwap
     */
    omit?: ActiveSwapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSwapInclude<ExtArgs> | null
    where?: ActiveSwapWhereInput
  }

  /**
   * SwapRequest without action
   */
  export type SwapRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapRequest
     */
    select?: SwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapRequest
     */
    omit?: SwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapRequestInclude<ExtArgs> | null
  }


  /**
   * Model ActiveSwap
   */

  export type AggregateActiveSwap = {
    _count: ActiveSwapCountAggregateOutputType | null
    _min: ActiveSwapMinAggregateOutputType | null
    _max: ActiveSwapMaxAggregateOutputType | null
  }

  export type ActiveSwapMinAggregateOutputType = {
    id: string | null
    swap_request_id: string | null
    user1_id: string | null
    user2_id: string | null
    skill1_id: string | null
    skill2_id: string | null
    status: $Enums.ActiveSwapStatus | null
    created_at: Date | null
    completed_at: Date | null
  }

  export type ActiveSwapMaxAggregateOutputType = {
    id: string | null
    swap_request_id: string | null
    user1_id: string | null
    user2_id: string | null
    skill1_id: string | null
    skill2_id: string | null
    status: $Enums.ActiveSwapStatus | null
    created_at: Date | null
    completed_at: Date | null
  }

  export type ActiveSwapCountAggregateOutputType = {
    id: number
    swap_request_id: number
    user1_id: number
    user2_id: number
    skill1_id: number
    skill2_id: number
    status: number
    created_at: number
    completed_at: number
    _all: number
  }


  export type ActiveSwapMinAggregateInputType = {
    id?: true
    swap_request_id?: true
    user1_id?: true
    user2_id?: true
    skill1_id?: true
    skill2_id?: true
    status?: true
    created_at?: true
    completed_at?: true
  }

  export type ActiveSwapMaxAggregateInputType = {
    id?: true
    swap_request_id?: true
    user1_id?: true
    user2_id?: true
    skill1_id?: true
    skill2_id?: true
    status?: true
    created_at?: true
    completed_at?: true
  }

  export type ActiveSwapCountAggregateInputType = {
    id?: true
    swap_request_id?: true
    user1_id?: true
    user2_id?: true
    skill1_id?: true
    skill2_id?: true
    status?: true
    created_at?: true
    completed_at?: true
    _all?: true
  }

  export type ActiveSwapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActiveSwap to aggregate.
     */
    where?: ActiveSwapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveSwaps to fetch.
     */
    orderBy?: ActiveSwapOrderByWithRelationInput | ActiveSwapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActiveSwapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveSwaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveSwaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActiveSwaps
    **/
    _count?: true | ActiveSwapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActiveSwapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActiveSwapMaxAggregateInputType
  }

  export type GetActiveSwapAggregateType<T extends ActiveSwapAggregateArgs> = {
        [P in keyof T & keyof AggregateActiveSwap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActiveSwap[P]>
      : GetScalarType<T[P], AggregateActiveSwap[P]>
  }




  export type ActiveSwapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActiveSwapWhereInput
    orderBy?: ActiveSwapOrderByWithAggregationInput | ActiveSwapOrderByWithAggregationInput[]
    by: ActiveSwapScalarFieldEnum[] | ActiveSwapScalarFieldEnum
    having?: ActiveSwapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActiveSwapCountAggregateInputType | true
    _min?: ActiveSwapMinAggregateInputType
    _max?: ActiveSwapMaxAggregateInputType
  }

  export type ActiveSwapGroupByOutputType = {
    id: string
    swap_request_id: string
    user1_id: string
    user2_id: string
    skill1_id: string
    skill2_id: string
    status: $Enums.ActiveSwapStatus
    created_at: Date
    completed_at: Date | null
    _count: ActiveSwapCountAggregateOutputType | null
    _min: ActiveSwapMinAggregateOutputType | null
    _max: ActiveSwapMaxAggregateOutputType | null
  }

  type GetActiveSwapGroupByPayload<T extends ActiveSwapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActiveSwapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActiveSwapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActiveSwapGroupByOutputType[P]>
            : GetScalarType<T[P], ActiveSwapGroupByOutputType[P]>
        }
      >
    >


  export type ActiveSwapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    swap_request_id?: boolean
    user1_id?: boolean
    user2_id?: boolean
    skill1_id?: boolean
    skill2_id?: boolean
    status?: boolean
    created_at?: boolean
    completed_at?: boolean
    swap_request?: boolean | SwapRequestDefaultArgs<ExtArgs>
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    skill1?: boolean | SkillDefaultArgs<ExtArgs>
    skill2?: boolean | SkillDefaultArgs<ExtArgs>
    completions?: boolean | ActiveSwap$completionsArgs<ExtArgs>
    _count?: boolean | ActiveSwapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activeSwap"]>



  export type ActiveSwapSelectScalar = {
    id?: boolean
    swap_request_id?: boolean
    user1_id?: boolean
    user2_id?: boolean
    skill1_id?: boolean
    skill2_id?: boolean
    status?: boolean
    created_at?: boolean
    completed_at?: boolean
  }

  export type ActiveSwapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "swap_request_id" | "user1_id" | "user2_id" | "skill1_id" | "skill2_id" | "status" | "created_at" | "completed_at", ExtArgs["result"]["activeSwap"]>
  export type ActiveSwapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    swap_request?: boolean | SwapRequestDefaultArgs<ExtArgs>
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    skill1?: boolean | SkillDefaultArgs<ExtArgs>
    skill2?: boolean | SkillDefaultArgs<ExtArgs>
    completions?: boolean | ActiveSwap$completionsArgs<ExtArgs>
    _count?: boolean | ActiveSwapCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ActiveSwapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActiveSwap"
    objects: {
      swap_request: Prisma.$SwapRequestPayload<ExtArgs>
      user1: Prisma.$UserPayload<ExtArgs>
      user2: Prisma.$UserPayload<ExtArgs>
      skill1: Prisma.$SkillPayload<ExtArgs>
      skill2: Prisma.$SkillPayload<ExtArgs>
      completions: Prisma.$SwapCompletionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      swap_request_id: string
      user1_id: string
      user2_id: string
      skill1_id: string
      skill2_id: string
      status: $Enums.ActiveSwapStatus
      created_at: Date
      completed_at: Date | null
    }, ExtArgs["result"]["activeSwap"]>
    composites: {}
  }

  type ActiveSwapGetPayload<S extends boolean | null | undefined | ActiveSwapDefaultArgs> = $Result.GetResult<Prisma.$ActiveSwapPayload, S>

  type ActiveSwapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActiveSwapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActiveSwapCountAggregateInputType | true
    }

  export interface ActiveSwapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActiveSwap'], meta: { name: 'ActiveSwap' } }
    /**
     * Find zero or one ActiveSwap that matches the filter.
     * @param {ActiveSwapFindUniqueArgs} args - Arguments to find a ActiveSwap
     * @example
     * // Get one ActiveSwap
     * const activeSwap = await prisma.activeSwap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActiveSwapFindUniqueArgs>(args: SelectSubset<T, ActiveSwapFindUniqueArgs<ExtArgs>>): Prisma__ActiveSwapClient<$Result.GetResult<Prisma.$ActiveSwapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActiveSwap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActiveSwapFindUniqueOrThrowArgs} args - Arguments to find a ActiveSwap
     * @example
     * // Get one ActiveSwap
     * const activeSwap = await prisma.activeSwap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActiveSwapFindUniqueOrThrowArgs>(args: SelectSubset<T, ActiveSwapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActiveSwapClient<$Result.GetResult<Prisma.$ActiveSwapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActiveSwap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSwapFindFirstArgs} args - Arguments to find a ActiveSwap
     * @example
     * // Get one ActiveSwap
     * const activeSwap = await prisma.activeSwap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActiveSwapFindFirstArgs>(args?: SelectSubset<T, ActiveSwapFindFirstArgs<ExtArgs>>): Prisma__ActiveSwapClient<$Result.GetResult<Prisma.$ActiveSwapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActiveSwap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSwapFindFirstOrThrowArgs} args - Arguments to find a ActiveSwap
     * @example
     * // Get one ActiveSwap
     * const activeSwap = await prisma.activeSwap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActiveSwapFindFirstOrThrowArgs>(args?: SelectSubset<T, ActiveSwapFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActiveSwapClient<$Result.GetResult<Prisma.$ActiveSwapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActiveSwaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSwapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActiveSwaps
     * const activeSwaps = await prisma.activeSwap.findMany()
     * 
     * // Get first 10 ActiveSwaps
     * const activeSwaps = await prisma.activeSwap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activeSwapWithIdOnly = await prisma.activeSwap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActiveSwapFindManyArgs>(args?: SelectSubset<T, ActiveSwapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveSwapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActiveSwap.
     * @param {ActiveSwapCreateArgs} args - Arguments to create a ActiveSwap.
     * @example
     * // Create one ActiveSwap
     * const ActiveSwap = await prisma.activeSwap.create({
     *   data: {
     *     // ... data to create a ActiveSwap
     *   }
     * })
     * 
     */
    create<T extends ActiveSwapCreateArgs>(args: SelectSubset<T, ActiveSwapCreateArgs<ExtArgs>>): Prisma__ActiveSwapClient<$Result.GetResult<Prisma.$ActiveSwapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActiveSwaps.
     * @param {ActiveSwapCreateManyArgs} args - Arguments to create many ActiveSwaps.
     * @example
     * // Create many ActiveSwaps
     * const activeSwap = await prisma.activeSwap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActiveSwapCreateManyArgs>(args?: SelectSubset<T, ActiveSwapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ActiveSwap.
     * @param {ActiveSwapDeleteArgs} args - Arguments to delete one ActiveSwap.
     * @example
     * // Delete one ActiveSwap
     * const ActiveSwap = await prisma.activeSwap.delete({
     *   where: {
     *     // ... filter to delete one ActiveSwap
     *   }
     * })
     * 
     */
    delete<T extends ActiveSwapDeleteArgs>(args: SelectSubset<T, ActiveSwapDeleteArgs<ExtArgs>>): Prisma__ActiveSwapClient<$Result.GetResult<Prisma.$ActiveSwapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActiveSwap.
     * @param {ActiveSwapUpdateArgs} args - Arguments to update one ActiveSwap.
     * @example
     * // Update one ActiveSwap
     * const activeSwap = await prisma.activeSwap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActiveSwapUpdateArgs>(args: SelectSubset<T, ActiveSwapUpdateArgs<ExtArgs>>): Prisma__ActiveSwapClient<$Result.GetResult<Prisma.$ActiveSwapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActiveSwaps.
     * @param {ActiveSwapDeleteManyArgs} args - Arguments to filter ActiveSwaps to delete.
     * @example
     * // Delete a few ActiveSwaps
     * const { count } = await prisma.activeSwap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActiveSwapDeleteManyArgs>(args?: SelectSubset<T, ActiveSwapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActiveSwaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSwapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActiveSwaps
     * const activeSwap = await prisma.activeSwap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActiveSwapUpdateManyArgs>(args: SelectSubset<T, ActiveSwapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActiveSwap.
     * @param {ActiveSwapUpsertArgs} args - Arguments to update or create a ActiveSwap.
     * @example
     * // Update or create a ActiveSwap
     * const activeSwap = await prisma.activeSwap.upsert({
     *   create: {
     *     // ... data to create a ActiveSwap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActiveSwap we want to update
     *   }
     * })
     */
    upsert<T extends ActiveSwapUpsertArgs>(args: SelectSubset<T, ActiveSwapUpsertArgs<ExtArgs>>): Prisma__ActiveSwapClient<$Result.GetResult<Prisma.$ActiveSwapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActiveSwaps that matches the filter.
     * @param {ActiveSwapFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const activeSwap = await prisma.activeSwap.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ActiveSwapFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ActiveSwap.
     * @param {ActiveSwapAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const activeSwap = await prisma.activeSwap.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ActiveSwapAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ActiveSwaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSwapCountArgs} args - Arguments to filter ActiveSwaps to count.
     * @example
     * // Count the number of ActiveSwaps
     * const count = await prisma.activeSwap.count({
     *   where: {
     *     // ... the filter for the ActiveSwaps we want to count
     *   }
     * })
    **/
    count<T extends ActiveSwapCountArgs>(
      args?: Subset<T, ActiveSwapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActiveSwapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActiveSwap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSwapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActiveSwapAggregateArgs>(args: Subset<T, ActiveSwapAggregateArgs>): Prisma.PrismaPromise<GetActiveSwapAggregateType<T>>

    /**
     * Group by ActiveSwap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSwapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActiveSwapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActiveSwapGroupByArgs['orderBy'] }
        : { orderBy?: ActiveSwapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActiveSwapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActiveSwapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActiveSwap model
   */
  readonly fields: ActiveSwapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActiveSwap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActiveSwapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    swap_request<T extends SwapRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SwapRequestDefaultArgs<ExtArgs>>): Prisma__SwapRequestClient<$Result.GetResult<Prisma.$SwapRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill1<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill2<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    completions<T extends ActiveSwap$completionsArgs<ExtArgs> = {}>(args?: Subset<T, ActiveSwap$completionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwapCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActiveSwap model
   */
  interface ActiveSwapFieldRefs {
    readonly id: FieldRef<"ActiveSwap", 'String'>
    readonly swap_request_id: FieldRef<"ActiveSwap", 'String'>
    readonly user1_id: FieldRef<"ActiveSwap", 'String'>
    readonly user2_id: FieldRef<"ActiveSwap", 'String'>
    readonly skill1_id: FieldRef<"ActiveSwap", 'String'>
    readonly skill2_id: FieldRef<"ActiveSwap", 'String'>
    readonly status: FieldRef<"ActiveSwap", 'ActiveSwapStatus'>
    readonly created_at: FieldRef<"ActiveSwap", 'DateTime'>
    readonly completed_at: FieldRef<"ActiveSwap", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActiveSwap findUnique
   */
  export type ActiveSwapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSwap
     */
    select?: ActiveSwapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSwap
     */
    omit?: ActiveSwapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSwapInclude<ExtArgs> | null
    /**
     * Filter, which ActiveSwap to fetch.
     */
    where: ActiveSwapWhereUniqueInput
  }

  /**
   * ActiveSwap findUniqueOrThrow
   */
  export type ActiveSwapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSwap
     */
    select?: ActiveSwapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSwap
     */
    omit?: ActiveSwapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSwapInclude<ExtArgs> | null
    /**
     * Filter, which ActiveSwap to fetch.
     */
    where: ActiveSwapWhereUniqueInput
  }

  /**
   * ActiveSwap findFirst
   */
  export type ActiveSwapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSwap
     */
    select?: ActiveSwapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSwap
     */
    omit?: ActiveSwapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSwapInclude<ExtArgs> | null
    /**
     * Filter, which ActiveSwap to fetch.
     */
    where?: ActiveSwapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveSwaps to fetch.
     */
    orderBy?: ActiveSwapOrderByWithRelationInput | ActiveSwapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActiveSwaps.
     */
    cursor?: ActiveSwapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveSwaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveSwaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActiveSwaps.
     */
    distinct?: ActiveSwapScalarFieldEnum | ActiveSwapScalarFieldEnum[]
  }

  /**
   * ActiveSwap findFirstOrThrow
   */
  export type ActiveSwapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSwap
     */
    select?: ActiveSwapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSwap
     */
    omit?: ActiveSwapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSwapInclude<ExtArgs> | null
    /**
     * Filter, which ActiveSwap to fetch.
     */
    where?: ActiveSwapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveSwaps to fetch.
     */
    orderBy?: ActiveSwapOrderByWithRelationInput | ActiveSwapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActiveSwaps.
     */
    cursor?: ActiveSwapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveSwaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveSwaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActiveSwaps.
     */
    distinct?: ActiveSwapScalarFieldEnum | ActiveSwapScalarFieldEnum[]
  }

  /**
   * ActiveSwap findMany
   */
  export type ActiveSwapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSwap
     */
    select?: ActiveSwapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSwap
     */
    omit?: ActiveSwapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSwapInclude<ExtArgs> | null
    /**
     * Filter, which ActiveSwaps to fetch.
     */
    where?: ActiveSwapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveSwaps to fetch.
     */
    orderBy?: ActiveSwapOrderByWithRelationInput | ActiveSwapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActiveSwaps.
     */
    cursor?: ActiveSwapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveSwaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveSwaps.
     */
    skip?: number
    distinct?: ActiveSwapScalarFieldEnum | ActiveSwapScalarFieldEnum[]
  }

  /**
   * ActiveSwap create
   */
  export type ActiveSwapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSwap
     */
    select?: ActiveSwapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSwap
     */
    omit?: ActiveSwapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSwapInclude<ExtArgs> | null
    /**
     * The data needed to create a ActiveSwap.
     */
    data: XOR<ActiveSwapCreateInput, ActiveSwapUncheckedCreateInput>
  }

  /**
   * ActiveSwap createMany
   */
  export type ActiveSwapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActiveSwaps.
     */
    data: ActiveSwapCreateManyInput | ActiveSwapCreateManyInput[]
  }

  /**
   * ActiveSwap update
   */
  export type ActiveSwapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSwap
     */
    select?: ActiveSwapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSwap
     */
    omit?: ActiveSwapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSwapInclude<ExtArgs> | null
    /**
     * The data needed to update a ActiveSwap.
     */
    data: XOR<ActiveSwapUpdateInput, ActiveSwapUncheckedUpdateInput>
    /**
     * Choose, which ActiveSwap to update.
     */
    where: ActiveSwapWhereUniqueInput
  }

  /**
   * ActiveSwap updateMany
   */
  export type ActiveSwapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActiveSwaps.
     */
    data: XOR<ActiveSwapUpdateManyMutationInput, ActiveSwapUncheckedUpdateManyInput>
    /**
     * Filter which ActiveSwaps to update
     */
    where?: ActiveSwapWhereInput
    /**
     * Limit how many ActiveSwaps to update.
     */
    limit?: number
  }

  /**
   * ActiveSwap upsert
   */
  export type ActiveSwapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSwap
     */
    select?: ActiveSwapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSwap
     */
    omit?: ActiveSwapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSwapInclude<ExtArgs> | null
    /**
     * The filter to search for the ActiveSwap to update in case it exists.
     */
    where: ActiveSwapWhereUniqueInput
    /**
     * In case the ActiveSwap found by the `where` argument doesn't exist, create a new ActiveSwap with this data.
     */
    create: XOR<ActiveSwapCreateInput, ActiveSwapUncheckedCreateInput>
    /**
     * In case the ActiveSwap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActiveSwapUpdateInput, ActiveSwapUncheckedUpdateInput>
  }

  /**
   * ActiveSwap delete
   */
  export type ActiveSwapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSwap
     */
    select?: ActiveSwapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSwap
     */
    omit?: ActiveSwapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSwapInclude<ExtArgs> | null
    /**
     * Filter which ActiveSwap to delete.
     */
    where: ActiveSwapWhereUniqueInput
  }

  /**
   * ActiveSwap deleteMany
   */
  export type ActiveSwapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActiveSwaps to delete
     */
    where?: ActiveSwapWhereInput
    /**
     * Limit how many ActiveSwaps to delete.
     */
    limit?: number
  }

  /**
   * ActiveSwap findRaw
   */
  export type ActiveSwapFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ActiveSwap aggregateRaw
   */
  export type ActiveSwapAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ActiveSwap.completions
   */
  export type ActiveSwap$completionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapCompletion
     */
    select?: SwapCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapCompletion
     */
    omit?: SwapCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapCompletionInclude<ExtArgs> | null
    where?: SwapCompletionWhereInput
    orderBy?: SwapCompletionOrderByWithRelationInput | SwapCompletionOrderByWithRelationInput[]
    cursor?: SwapCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwapCompletionScalarFieldEnum | SwapCompletionScalarFieldEnum[]
  }

  /**
   * ActiveSwap without action
   */
  export type ActiveSwapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSwap
     */
    select?: ActiveSwapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveSwap
     */
    omit?: ActiveSwapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiveSwapInclude<ExtArgs> | null
  }


  /**
   * Model SwapCompletion
   */

  export type AggregateSwapCompletion = {
    _count: SwapCompletionCountAggregateOutputType | null
    _avg: SwapCompletionAvgAggregateOutputType | null
    _sum: SwapCompletionSumAggregateOutputType | null
    _min: SwapCompletionMinAggregateOutputType | null
    _max: SwapCompletionMaxAggregateOutputType | null
  }

  export type SwapCompletionAvgAggregateOutputType = {
    rating: number | null
  }

  export type SwapCompletionSumAggregateOutputType = {
    rating: number | null
  }

  export type SwapCompletionMinAggregateOutputType = {
    id: string | null
    active_swap_id: string | null
    completed_by: string | null
    rating: number | null
    feedback: string | null
    created_at: Date | null
  }

  export type SwapCompletionMaxAggregateOutputType = {
    id: string | null
    active_swap_id: string | null
    completed_by: string | null
    rating: number | null
    feedback: string | null
    created_at: Date | null
  }

  export type SwapCompletionCountAggregateOutputType = {
    id: number
    active_swap_id: number
    completed_by: number
    rating: number
    feedback: number
    created_at: number
    _all: number
  }


  export type SwapCompletionAvgAggregateInputType = {
    rating?: true
  }

  export type SwapCompletionSumAggregateInputType = {
    rating?: true
  }

  export type SwapCompletionMinAggregateInputType = {
    id?: true
    active_swap_id?: true
    completed_by?: true
    rating?: true
    feedback?: true
    created_at?: true
  }

  export type SwapCompletionMaxAggregateInputType = {
    id?: true
    active_swap_id?: true
    completed_by?: true
    rating?: true
    feedback?: true
    created_at?: true
  }

  export type SwapCompletionCountAggregateInputType = {
    id?: true
    active_swap_id?: true
    completed_by?: true
    rating?: true
    feedback?: true
    created_at?: true
    _all?: true
  }

  export type SwapCompletionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SwapCompletion to aggregate.
     */
    where?: SwapCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwapCompletions to fetch.
     */
    orderBy?: SwapCompletionOrderByWithRelationInput | SwapCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SwapCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwapCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwapCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SwapCompletions
    **/
    _count?: true | SwapCompletionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SwapCompletionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SwapCompletionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SwapCompletionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SwapCompletionMaxAggregateInputType
  }

  export type GetSwapCompletionAggregateType<T extends SwapCompletionAggregateArgs> = {
        [P in keyof T & keyof AggregateSwapCompletion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSwapCompletion[P]>
      : GetScalarType<T[P], AggregateSwapCompletion[P]>
  }




  export type SwapCompletionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwapCompletionWhereInput
    orderBy?: SwapCompletionOrderByWithAggregationInput | SwapCompletionOrderByWithAggregationInput[]
    by: SwapCompletionScalarFieldEnum[] | SwapCompletionScalarFieldEnum
    having?: SwapCompletionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SwapCompletionCountAggregateInputType | true
    _avg?: SwapCompletionAvgAggregateInputType
    _sum?: SwapCompletionSumAggregateInputType
    _min?: SwapCompletionMinAggregateInputType
    _max?: SwapCompletionMaxAggregateInputType
  }

  export type SwapCompletionGroupByOutputType = {
    id: string
    active_swap_id: string
    completed_by: string
    rating: number | null
    feedback: string | null
    created_at: Date
    _count: SwapCompletionCountAggregateOutputType | null
    _avg: SwapCompletionAvgAggregateOutputType | null
    _sum: SwapCompletionSumAggregateOutputType | null
    _min: SwapCompletionMinAggregateOutputType | null
    _max: SwapCompletionMaxAggregateOutputType | null
  }

  type GetSwapCompletionGroupByPayload<T extends SwapCompletionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SwapCompletionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SwapCompletionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SwapCompletionGroupByOutputType[P]>
            : GetScalarType<T[P], SwapCompletionGroupByOutputType[P]>
        }
      >
    >


  export type SwapCompletionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    active_swap_id?: boolean
    completed_by?: boolean
    rating?: boolean
    feedback?: boolean
    created_at?: boolean
    active_swap?: boolean | ActiveSwapDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swapCompletion"]>



  export type SwapCompletionSelectScalar = {
    id?: boolean
    active_swap_id?: boolean
    completed_by?: boolean
    rating?: boolean
    feedback?: boolean
    created_at?: boolean
  }

  export type SwapCompletionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "active_swap_id" | "completed_by" | "rating" | "feedback" | "created_at", ExtArgs["result"]["swapCompletion"]>
  export type SwapCompletionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    active_swap?: boolean | ActiveSwapDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SwapCompletionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SwapCompletion"
    objects: {
      active_swap: Prisma.$ActiveSwapPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      active_swap_id: string
      completed_by: string
      rating: number | null
      feedback: string | null
      created_at: Date
    }, ExtArgs["result"]["swapCompletion"]>
    composites: {}
  }

  type SwapCompletionGetPayload<S extends boolean | null | undefined | SwapCompletionDefaultArgs> = $Result.GetResult<Prisma.$SwapCompletionPayload, S>

  type SwapCompletionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SwapCompletionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SwapCompletionCountAggregateInputType | true
    }

  export interface SwapCompletionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SwapCompletion'], meta: { name: 'SwapCompletion' } }
    /**
     * Find zero or one SwapCompletion that matches the filter.
     * @param {SwapCompletionFindUniqueArgs} args - Arguments to find a SwapCompletion
     * @example
     * // Get one SwapCompletion
     * const swapCompletion = await prisma.swapCompletion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SwapCompletionFindUniqueArgs>(args: SelectSubset<T, SwapCompletionFindUniqueArgs<ExtArgs>>): Prisma__SwapCompletionClient<$Result.GetResult<Prisma.$SwapCompletionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SwapCompletion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SwapCompletionFindUniqueOrThrowArgs} args - Arguments to find a SwapCompletion
     * @example
     * // Get one SwapCompletion
     * const swapCompletion = await prisma.swapCompletion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SwapCompletionFindUniqueOrThrowArgs>(args: SelectSubset<T, SwapCompletionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SwapCompletionClient<$Result.GetResult<Prisma.$SwapCompletionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SwapCompletion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapCompletionFindFirstArgs} args - Arguments to find a SwapCompletion
     * @example
     * // Get one SwapCompletion
     * const swapCompletion = await prisma.swapCompletion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SwapCompletionFindFirstArgs>(args?: SelectSubset<T, SwapCompletionFindFirstArgs<ExtArgs>>): Prisma__SwapCompletionClient<$Result.GetResult<Prisma.$SwapCompletionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SwapCompletion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapCompletionFindFirstOrThrowArgs} args - Arguments to find a SwapCompletion
     * @example
     * // Get one SwapCompletion
     * const swapCompletion = await prisma.swapCompletion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SwapCompletionFindFirstOrThrowArgs>(args?: SelectSubset<T, SwapCompletionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SwapCompletionClient<$Result.GetResult<Prisma.$SwapCompletionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SwapCompletions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapCompletionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SwapCompletions
     * const swapCompletions = await prisma.swapCompletion.findMany()
     * 
     * // Get first 10 SwapCompletions
     * const swapCompletions = await prisma.swapCompletion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const swapCompletionWithIdOnly = await prisma.swapCompletion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SwapCompletionFindManyArgs>(args?: SelectSubset<T, SwapCompletionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwapCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SwapCompletion.
     * @param {SwapCompletionCreateArgs} args - Arguments to create a SwapCompletion.
     * @example
     * // Create one SwapCompletion
     * const SwapCompletion = await prisma.swapCompletion.create({
     *   data: {
     *     // ... data to create a SwapCompletion
     *   }
     * })
     * 
     */
    create<T extends SwapCompletionCreateArgs>(args: SelectSubset<T, SwapCompletionCreateArgs<ExtArgs>>): Prisma__SwapCompletionClient<$Result.GetResult<Prisma.$SwapCompletionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SwapCompletions.
     * @param {SwapCompletionCreateManyArgs} args - Arguments to create many SwapCompletions.
     * @example
     * // Create many SwapCompletions
     * const swapCompletion = await prisma.swapCompletion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SwapCompletionCreateManyArgs>(args?: SelectSubset<T, SwapCompletionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SwapCompletion.
     * @param {SwapCompletionDeleteArgs} args - Arguments to delete one SwapCompletion.
     * @example
     * // Delete one SwapCompletion
     * const SwapCompletion = await prisma.swapCompletion.delete({
     *   where: {
     *     // ... filter to delete one SwapCompletion
     *   }
     * })
     * 
     */
    delete<T extends SwapCompletionDeleteArgs>(args: SelectSubset<T, SwapCompletionDeleteArgs<ExtArgs>>): Prisma__SwapCompletionClient<$Result.GetResult<Prisma.$SwapCompletionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SwapCompletion.
     * @param {SwapCompletionUpdateArgs} args - Arguments to update one SwapCompletion.
     * @example
     * // Update one SwapCompletion
     * const swapCompletion = await prisma.swapCompletion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SwapCompletionUpdateArgs>(args: SelectSubset<T, SwapCompletionUpdateArgs<ExtArgs>>): Prisma__SwapCompletionClient<$Result.GetResult<Prisma.$SwapCompletionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SwapCompletions.
     * @param {SwapCompletionDeleteManyArgs} args - Arguments to filter SwapCompletions to delete.
     * @example
     * // Delete a few SwapCompletions
     * const { count } = await prisma.swapCompletion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SwapCompletionDeleteManyArgs>(args?: SelectSubset<T, SwapCompletionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SwapCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapCompletionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SwapCompletions
     * const swapCompletion = await prisma.swapCompletion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SwapCompletionUpdateManyArgs>(args: SelectSubset<T, SwapCompletionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SwapCompletion.
     * @param {SwapCompletionUpsertArgs} args - Arguments to update or create a SwapCompletion.
     * @example
     * // Update or create a SwapCompletion
     * const swapCompletion = await prisma.swapCompletion.upsert({
     *   create: {
     *     // ... data to create a SwapCompletion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SwapCompletion we want to update
     *   }
     * })
     */
    upsert<T extends SwapCompletionUpsertArgs>(args: SelectSubset<T, SwapCompletionUpsertArgs<ExtArgs>>): Prisma__SwapCompletionClient<$Result.GetResult<Prisma.$SwapCompletionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SwapCompletions that matches the filter.
     * @param {SwapCompletionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const swapCompletion = await prisma.swapCompletion.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SwapCompletionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SwapCompletion.
     * @param {SwapCompletionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const swapCompletion = await prisma.swapCompletion.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SwapCompletionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SwapCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapCompletionCountArgs} args - Arguments to filter SwapCompletions to count.
     * @example
     * // Count the number of SwapCompletions
     * const count = await prisma.swapCompletion.count({
     *   where: {
     *     // ... the filter for the SwapCompletions we want to count
     *   }
     * })
    **/
    count<T extends SwapCompletionCountArgs>(
      args?: Subset<T, SwapCompletionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SwapCompletionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SwapCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapCompletionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SwapCompletionAggregateArgs>(args: Subset<T, SwapCompletionAggregateArgs>): Prisma.PrismaPromise<GetSwapCompletionAggregateType<T>>

    /**
     * Group by SwapCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwapCompletionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SwapCompletionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SwapCompletionGroupByArgs['orderBy'] }
        : { orderBy?: SwapCompletionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SwapCompletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSwapCompletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SwapCompletion model
   */
  readonly fields: SwapCompletionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SwapCompletion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SwapCompletionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    active_swap<T extends ActiveSwapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActiveSwapDefaultArgs<ExtArgs>>): Prisma__ActiveSwapClient<$Result.GetResult<Prisma.$ActiveSwapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SwapCompletion model
   */
  interface SwapCompletionFieldRefs {
    readonly id: FieldRef<"SwapCompletion", 'String'>
    readonly active_swap_id: FieldRef<"SwapCompletion", 'String'>
    readonly completed_by: FieldRef<"SwapCompletion", 'String'>
    readonly rating: FieldRef<"SwapCompletion", 'Int'>
    readonly feedback: FieldRef<"SwapCompletion", 'String'>
    readonly created_at: FieldRef<"SwapCompletion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SwapCompletion findUnique
   */
  export type SwapCompletionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapCompletion
     */
    select?: SwapCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapCompletion
     */
    omit?: SwapCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapCompletionInclude<ExtArgs> | null
    /**
     * Filter, which SwapCompletion to fetch.
     */
    where: SwapCompletionWhereUniqueInput
  }

  /**
   * SwapCompletion findUniqueOrThrow
   */
  export type SwapCompletionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapCompletion
     */
    select?: SwapCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapCompletion
     */
    omit?: SwapCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapCompletionInclude<ExtArgs> | null
    /**
     * Filter, which SwapCompletion to fetch.
     */
    where: SwapCompletionWhereUniqueInput
  }

  /**
   * SwapCompletion findFirst
   */
  export type SwapCompletionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapCompletion
     */
    select?: SwapCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapCompletion
     */
    omit?: SwapCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapCompletionInclude<ExtArgs> | null
    /**
     * Filter, which SwapCompletion to fetch.
     */
    where?: SwapCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwapCompletions to fetch.
     */
    orderBy?: SwapCompletionOrderByWithRelationInput | SwapCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SwapCompletions.
     */
    cursor?: SwapCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwapCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwapCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SwapCompletions.
     */
    distinct?: SwapCompletionScalarFieldEnum | SwapCompletionScalarFieldEnum[]
  }

  /**
   * SwapCompletion findFirstOrThrow
   */
  export type SwapCompletionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapCompletion
     */
    select?: SwapCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapCompletion
     */
    omit?: SwapCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapCompletionInclude<ExtArgs> | null
    /**
     * Filter, which SwapCompletion to fetch.
     */
    where?: SwapCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwapCompletions to fetch.
     */
    orderBy?: SwapCompletionOrderByWithRelationInput | SwapCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SwapCompletions.
     */
    cursor?: SwapCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwapCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwapCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SwapCompletions.
     */
    distinct?: SwapCompletionScalarFieldEnum | SwapCompletionScalarFieldEnum[]
  }

  /**
   * SwapCompletion findMany
   */
  export type SwapCompletionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapCompletion
     */
    select?: SwapCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapCompletion
     */
    omit?: SwapCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapCompletionInclude<ExtArgs> | null
    /**
     * Filter, which SwapCompletions to fetch.
     */
    where?: SwapCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwapCompletions to fetch.
     */
    orderBy?: SwapCompletionOrderByWithRelationInput | SwapCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SwapCompletions.
     */
    cursor?: SwapCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwapCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwapCompletions.
     */
    skip?: number
    distinct?: SwapCompletionScalarFieldEnum | SwapCompletionScalarFieldEnum[]
  }

  /**
   * SwapCompletion create
   */
  export type SwapCompletionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapCompletion
     */
    select?: SwapCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapCompletion
     */
    omit?: SwapCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapCompletionInclude<ExtArgs> | null
    /**
     * The data needed to create a SwapCompletion.
     */
    data: XOR<SwapCompletionCreateInput, SwapCompletionUncheckedCreateInput>
  }

  /**
   * SwapCompletion createMany
   */
  export type SwapCompletionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SwapCompletions.
     */
    data: SwapCompletionCreateManyInput | SwapCompletionCreateManyInput[]
  }

  /**
   * SwapCompletion update
   */
  export type SwapCompletionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapCompletion
     */
    select?: SwapCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapCompletion
     */
    omit?: SwapCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapCompletionInclude<ExtArgs> | null
    /**
     * The data needed to update a SwapCompletion.
     */
    data: XOR<SwapCompletionUpdateInput, SwapCompletionUncheckedUpdateInput>
    /**
     * Choose, which SwapCompletion to update.
     */
    where: SwapCompletionWhereUniqueInput
  }

  /**
   * SwapCompletion updateMany
   */
  export type SwapCompletionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SwapCompletions.
     */
    data: XOR<SwapCompletionUpdateManyMutationInput, SwapCompletionUncheckedUpdateManyInput>
    /**
     * Filter which SwapCompletions to update
     */
    where?: SwapCompletionWhereInput
    /**
     * Limit how many SwapCompletions to update.
     */
    limit?: number
  }

  /**
   * SwapCompletion upsert
   */
  export type SwapCompletionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapCompletion
     */
    select?: SwapCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapCompletion
     */
    omit?: SwapCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapCompletionInclude<ExtArgs> | null
    /**
     * The filter to search for the SwapCompletion to update in case it exists.
     */
    where: SwapCompletionWhereUniqueInput
    /**
     * In case the SwapCompletion found by the `where` argument doesn't exist, create a new SwapCompletion with this data.
     */
    create: XOR<SwapCompletionCreateInput, SwapCompletionUncheckedCreateInput>
    /**
     * In case the SwapCompletion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SwapCompletionUpdateInput, SwapCompletionUncheckedUpdateInput>
  }

  /**
   * SwapCompletion delete
   */
  export type SwapCompletionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapCompletion
     */
    select?: SwapCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapCompletion
     */
    omit?: SwapCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapCompletionInclude<ExtArgs> | null
    /**
     * Filter which SwapCompletion to delete.
     */
    where: SwapCompletionWhereUniqueInput
  }

  /**
   * SwapCompletion deleteMany
   */
  export type SwapCompletionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SwapCompletions to delete
     */
    where?: SwapCompletionWhereInput
    /**
     * Limit how many SwapCompletions to delete.
     */
    limit?: number
  }

  /**
   * SwapCompletion findRaw
   */
  export type SwapCompletionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SwapCompletion aggregateRaw
   */
  export type SwapCompletionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SwapCompletion without action
   */
  export type SwapCompletionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwapCompletion
     */
    select?: SwapCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwapCompletion
     */
    omit?: SwapCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwapCompletionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_admin: 'is_admin',
    is_super_admin: 'is_super_admin',
    is_verified: 'is_verified',
    otp: 'otp',
    otp_expiry: 'otp_expiry',
    reset_token: 'reset_token'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    sender_id: 'sender_id',
    receiver_id: 'receiver_id',
    timestamp: 'timestamp',
    read: 'read'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    user_id: 'user_id',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    level: 'level',
    achievement: 'achievement',
    user_id: 'user_id',
    category_id: 'category_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const SkillCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SkillCategoryScalarFieldEnum = (typeof SkillCategoryScalarFieldEnum)[keyof typeof SkillCategoryScalarFieldEnum]


  export const SwapRequestScalarFieldEnum: {
    id: 'id',
    sender_id: 'sender_id',
    receiver_id: 'receiver_id',
    offered_skill_id: 'offered_skill_id',
    requested_skill_id: 'requested_skill_id',
    message: 'message',
    status: 'status',
    rejection_reason: 'rejection_reason',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SwapRequestScalarFieldEnum = (typeof SwapRequestScalarFieldEnum)[keyof typeof SwapRequestScalarFieldEnum]


  export const ActiveSwapScalarFieldEnum: {
    id: 'id',
    swap_request_id: 'swap_request_id',
    user1_id: 'user1_id',
    user2_id: 'user2_id',
    skill1_id: 'skill1_id',
    skill2_id: 'skill2_id',
    status: 'status',
    created_at: 'created_at',
    completed_at: 'completed_at'
  };

  export type ActiveSwapScalarFieldEnum = (typeof ActiveSwapScalarFieldEnum)[keyof typeof ActiveSwapScalarFieldEnum]


  export const SwapCompletionScalarFieldEnum: {
    id: 'id',
    active_swap_id: 'active_swap_id',
    completed_by: 'completed_by',
    rating: 'rating',
    feedback: 'feedback',
    created_at: 'created_at'
  };

  export type SwapCompletionScalarFieldEnum = (typeof SwapCompletionScalarFieldEnum)[keyof typeof SwapCompletionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Level'
   */
  export type EnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Level'>
    


  /**
   * Reference to a field of type 'Level[]'
   */
  export type ListEnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Level[]'>
    


  /**
   * Reference to a field of type 'SwapStatus'
   */
  export type EnumSwapStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwapStatus'>
    


  /**
   * Reference to a field of type 'SwapStatus[]'
   */
  export type ListEnumSwapStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwapStatus[]'>
    


  /**
   * Reference to a field of type 'ActiveSwapStatus'
   */
  export type EnumActiveSwapStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActiveSwapStatus'>
    


  /**
   * Reference to a field of type 'ActiveSwapStatus[]'
   */
  export type ListEnumActiveSwapStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActiveSwapStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    is_admin?: BoolFilter<"User"> | boolean
    is_super_admin?: BoolFilter<"User"> | boolean
    is_verified?: BoolFilter<"User"> | boolean
    otp?: StringNullableFilter<"User"> | string | null
    otp_expiry?: DateTimeNullableFilter<"User"> | Date | string | null
    reset_token?: StringNullableFilter<"User"> | string | null
    skills?: SkillListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    sent_swap_requests?: SwapRequestListRelationFilter
    received_swap_requests?: SwapRequestListRelationFilter
    active_swaps_as_user1?: ActiveSwapListRelationFilter
    active_swaps_as_user2?: ActiveSwapListRelationFilter
    swap_completions?: SwapCompletionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_admin?: SortOrder
    is_super_admin?: SortOrder
    is_verified?: SortOrder
    otp?: SortOrder
    otp_expiry?: SortOrder
    reset_token?: SortOrder
    skills?: SkillOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    sentMessages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
    sent_swap_requests?: SwapRequestOrderByRelationAggregateInput
    received_swap_requests?: SwapRequestOrderByRelationAggregateInput
    active_swaps_as_user1?: ActiveSwapOrderByRelationAggregateInput
    active_swaps_as_user2?: ActiveSwapOrderByRelationAggregateInput
    swap_completions?: SwapCompletionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    is_admin?: BoolFilter<"User"> | boolean
    is_super_admin?: BoolFilter<"User"> | boolean
    is_verified?: BoolFilter<"User"> | boolean
    otp?: StringNullableFilter<"User"> | string | null
    otp_expiry?: DateTimeNullableFilter<"User"> | Date | string | null
    reset_token?: StringNullableFilter<"User"> | string | null
    skills?: SkillListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    sent_swap_requests?: SwapRequestListRelationFilter
    received_swap_requests?: SwapRequestListRelationFilter
    active_swaps_as_user1?: ActiveSwapListRelationFilter
    active_swaps_as_user2?: ActiveSwapListRelationFilter
    swap_completions?: SwapCompletionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_admin?: SortOrder
    is_super_admin?: SortOrder
    is_verified?: SortOrder
    otp?: SortOrder
    otp_expiry?: SortOrder
    reset_token?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    is_admin?: BoolWithAggregatesFilter<"User"> | boolean
    is_super_admin?: BoolWithAggregatesFilter<"User"> | boolean
    is_verified?: BoolWithAggregatesFilter<"User"> | boolean
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    otp_expiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    reset_token?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    sender_id?: StringFilter<"Message"> | string
    receiver_id?: StringFilter<"Message"> | string
    timestamp?: DateTimeFilter<"Message"> | Date | string
    read?: BoolFilter<"Message"> | boolean
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    timestamp?: SortOrder
    read?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    sender_id?: StringFilter<"Message"> | string
    receiver_id?: StringFilter<"Message"> | string
    timestamp?: DateTimeFilter<"Message"> | Date | string
    read?: BoolFilter<"Message"> | boolean
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    timestamp?: SortOrder
    read?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    sender_id?: StringWithAggregatesFilter<"Message"> | string
    receiver_id?: StringWithAggregatesFilter<"Message"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    read?: BoolWithAggregatesFilter<"Message"> | boolean
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    user_id?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    user_id?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    user_id?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    title?: StringFilter<"Skill"> | string
    description?: StringNullableFilter<"Skill"> | string | null
    level?: EnumLevelFilter<"Skill"> | $Enums.Level
    achievement?: StringNullableFilter<"Skill"> | string | null
    user_id?: StringNullableFilter<"Skill"> | string | null
    category_id?: StringFilter<"Skill"> | string
    created_at?: DateTimeFilter<"Skill"> | Date | string
    updated_at?: DateTimeFilter<"Skill"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    category?: XOR<SkillCategoryScalarRelationFilter, SkillCategoryWhereInput>
    offered_in_requests?: SwapRequestListRelationFilter
    requested_in_requests?: SwapRequestListRelationFilter
    active_swaps_skill1?: ActiveSwapListRelationFilter
    active_swaps_skill2?: ActiveSwapListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    achievement?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: SkillCategoryOrderByWithRelationInput
    offered_in_requests?: SwapRequestOrderByRelationAggregateInput
    requested_in_requests?: SwapRequestOrderByRelationAggregateInput
    active_swaps_skill1?: ActiveSwapOrderByRelationAggregateInput
    active_swaps_skill2?: ActiveSwapOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    title?: StringFilter<"Skill"> | string
    description?: StringNullableFilter<"Skill"> | string | null
    level?: EnumLevelFilter<"Skill"> | $Enums.Level
    achievement?: StringNullableFilter<"Skill"> | string | null
    user_id?: StringNullableFilter<"Skill"> | string | null
    category_id?: StringFilter<"Skill"> | string
    created_at?: DateTimeFilter<"Skill"> | Date | string
    updated_at?: DateTimeFilter<"Skill"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    category?: XOR<SkillCategoryScalarRelationFilter, SkillCategoryWhereInput>
    offered_in_requests?: SwapRequestListRelationFilter
    requested_in_requests?: SwapRequestListRelationFilter
    active_swaps_skill1?: ActiveSwapListRelationFilter
    active_swaps_skill2?: ActiveSwapListRelationFilter
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    achievement?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    title?: StringWithAggregatesFilter<"Skill"> | string
    description?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    level?: EnumLevelWithAggregatesFilter<"Skill"> | $Enums.Level
    achievement?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    user_id?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    category_id?: StringWithAggregatesFilter<"Skill"> | string
    created_at?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
  }

  export type SkillCategoryWhereInput = {
    AND?: SkillCategoryWhereInput | SkillCategoryWhereInput[]
    OR?: SkillCategoryWhereInput[]
    NOT?: SkillCategoryWhereInput | SkillCategoryWhereInput[]
    id?: StringFilter<"SkillCategory"> | string
    name?: StringFilter<"SkillCategory"> | string
    skills?: SkillListRelationFilter
  }

  export type SkillCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    skills?: SkillOrderByRelationAggregateInput
  }

  export type SkillCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SkillCategoryWhereInput | SkillCategoryWhereInput[]
    OR?: SkillCategoryWhereInput[]
    NOT?: SkillCategoryWhereInput | SkillCategoryWhereInput[]
    skills?: SkillListRelationFilter
  }, "id" | "name">

  export type SkillCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SkillCategoryCountOrderByAggregateInput
    _max?: SkillCategoryMaxOrderByAggregateInput
    _min?: SkillCategoryMinOrderByAggregateInput
  }

  export type SkillCategoryScalarWhereWithAggregatesInput = {
    AND?: SkillCategoryScalarWhereWithAggregatesInput | SkillCategoryScalarWhereWithAggregatesInput[]
    OR?: SkillCategoryScalarWhereWithAggregatesInput[]
    NOT?: SkillCategoryScalarWhereWithAggregatesInput | SkillCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SkillCategory"> | string
    name?: StringWithAggregatesFilter<"SkillCategory"> | string
  }

  export type SwapRequestWhereInput = {
    AND?: SwapRequestWhereInput | SwapRequestWhereInput[]
    OR?: SwapRequestWhereInput[]
    NOT?: SwapRequestWhereInput | SwapRequestWhereInput[]
    id?: StringFilter<"SwapRequest"> | string
    sender_id?: StringFilter<"SwapRequest"> | string
    receiver_id?: StringFilter<"SwapRequest"> | string
    offered_skill_id?: StringFilter<"SwapRequest"> | string
    requested_skill_id?: StringFilter<"SwapRequest"> | string
    message?: StringNullableFilter<"SwapRequest"> | string | null
    status?: EnumSwapStatusFilter<"SwapRequest"> | $Enums.SwapStatus
    rejection_reason?: StringNullableFilter<"SwapRequest"> | string | null
    created_at?: DateTimeFilter<"SwapRequest"> | Date | string
    updated_at?: DateTimeFilter<"SwapRequest"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    offered_skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    requested_skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    active_swap?: XOR<ActiveSwapNullableScalarRelationFilter, ActiveSwapWhereInput> | null
  }

  export type SwapRequestOrderByWithRelationInput = {
    id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    offered_skill_id?: SortOrder
    requested_skill_id?: SortOrder
    message?: SortOrder
    status?: SortOrder
    rejection_reason?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    offered_skill?: SkillOrderByWithRelationInput
    requested_skill?: SkillOrderByWithRelationInput
    active_swap?: ActiveSwapOrderByWithRelationInput
  }

  export type SwapRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SwapRequestWhereInput | SwapRequestWhereInput[]
    OR?: SwapRequestWhereInput[]
    NOT?: SwapRequestWhereInput | SwapRequestWhereInput[]
    sender_id?: StringFilter<"SwapRequest"> | string
    receiver_id?: StringFilter<"SwapRequest"> | string
    offered_skill_id?: StringFilter<"SwapRequest"> | string
    requested_skill_id?: StringFilter<"SwapRequest"> | string
    message?: StringNullableFilter<"SwapRequest"> | string | null
    status?: EnumSwapStatusFilter<"SwapRequest"> | $Enums.SwapStatus
    rejection_reason?: StringNullableFilter<"SwapRequest"> | string | null
    created_at?: DateTimeFilter<"SwapRequest"> | Date | string
    updated_at?: DateTimeFilter<"SwapRequest"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    offered_skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    requested_skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    active_swap?: XOR<ActiveSwapNullableScalarRelationFilter, ActiveSwapWhereInput> | null
  }, "id">

  export type SwapRequestOrderByWithAggregationInput = {
    id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    offered_skill_id?: SortOrder
    requested_skill_id?: SortOrder
    message?: SortOrder
    status?: SortOrder
    rejection_reason?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SwapRequestCountOrderByAggregateInput
    _max?: SwapRequestMaxOrderByAggregateInput
    _min?: SwapRequestMinOrderByAggregateInput
  }

  export type SwapRequestScalarWhereWithAggregatesInput = {
    AND?: SwapRequestScalarWhereWithAggregatesInput | SwapRequestScalarWhereWithAggregatesInput[]
    OR?: SwapRequestScalarWhereWithAggregatesInput[]
    NOT?: SwapRequestScalarWhereWithAggregatesInput | SwapRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SwapRequest"> | string
    sender_id?: StringWithAggregatesFilter<"SwapRequest"> | string
    receiver_id?: StringWithAggregatesFilter<"SwapRequest"> | string
    offered_skill_id?: StringWithAggregatesFilter<"SwapRequest"> | string
    requested_skill_id?: StringWithAggregatesFilter<"SwapRequest"> | string
    message?: StringNullableWithAggregatesFilter<"SwapRequest"> | string | null
    status?: EnumSwapStatusWithAggregatesFilter<"SwapRequest"> | $Enums.SwapStatus
    rejection_reason?: StringNullableWithAggregatesFilter<"SwapRequest"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"SwapRequest"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SwapRequest"> | Date | string
  }

  export type ActiveSwapWhereInput = {
    AND?: ActiveSwapWhereInput | ActiveSwapWhereInput[]
    OR?: ActiveSwapWhereInput[]
    NOT?: ActiveSwapWhereInput | ActiveSwapWhereInput[]
    id?: StringFilter<"ActiveSwap"> | string
    swap_request_id?: StringFilter<"ActiveSwap"> | string
    user1_id?: StringFilter<"ActiveSwap"> | string
    user2_id?: StringFilter<"ActiveSwap"> | string
    skill1_id?: StringFilter<"ActiveSwap"> | string
    skill2_id?: StringFilter<"ActiveSwap"> | string
    status?: EnumActiveSwapStatusFilter<"ActiveSwap"> | $Enums.ActiveSwapStatus
    created_at?: DateTimeFilter<"ActiveSwap"> | Date | string
    completed_at?: DateTimeNullableFilter<"ActiveSwap"> | Date | string | null
    swap_request?: XOR<SwapRequestScalarRelationFilter, SwapRequestWhereInput>
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
    skill1?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    skill2?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    completions?: SwapCompletionListRelationFilter
  }

  export type ActiveSwapOrderByWithRelationInput = {
    id?: SortOrder
    swap_request_id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    skill1_id?: SortOrder
    skill2_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
    swap_request?: SwapRequestOrderByWithRelationInput
    user1?: UserOrderByWithRelationInput
    user2?: UserOrderByWithRelationInput
    skill1?: SkillOrderByWithRelationInput
    skill2?: SkillOrderByWithRelationInput
    completions?: SwapCompletionOrderByRelationAggregateInput
  }

  export type ActiveSwapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    swap_request_id?: string
    AND?: ActiveSwapWhereInput | ActiveSwapWhereInput[]
    OR?: ActiveSwapWhereInput[]
    NOT?: ActiveSwapWhereInput | ActiveSwapWhereInput[]
    user1_id?: StringFilter<"ActiveSwap"> | string
    user2_id?: StringFilter<"ActiveSwap"> | string
    skill1_id?: StringFilter<"ActiveSwap"> | string
    skill2_id?: StringFilter<"ActiveSwap"> | string
    status?: EnumActiveSwapStatusFilter<"ActiveSwap"> | $Enums.ActiveSwapStatus
    created_at?: DateTimeFilter<"ActiveSwap"> | Date | string
    completed_at?: DateTimeNullableFilter<"ActiveSwap"> | Date | string | null
    swap_request?: XOR<SwapRequestScalarRelationFilter, SwapRequestWhereInput>
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
    skill1?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    skill2?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    completions?: SwapCompletionListRelationFilter
  }, "id" | "swap_request_id">

  export type ActiveSwapOrderByWithAggregationInput = {
    id?: SortOrder
    swap_request_id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    skill1_id?: SortOrder
    skill2_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
    _count?: ActiveSwapCountOrderByAggregateInput
    _max?: ActiveSwapMaxOrderByAggregateInput
    _min?: ActiveSwapMinOrderByAggregateInput
  }

  export type ActiveSwapScalarWhereWithAggregatesInput = {
    AND?: ActiveSwapScalarWhereWithAggregatesInput | ActiveSwapScalarWhereWithAggregatesInput[]
    OR?: ActiveSwapScalarWhereWithAggregatesInput[]
    NOT?: ActiveSwapScalarWhereWithAggregatesInput | ActiveSwapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActiveSwap"> | string
    swap_request_id?: StringWithAggregatesFilter<"ActiveSwap"> | string
    user1_id?: StringWithAggregatesFilter<"ActiveSwap"> | string
    user2_id?: StringWithAggregatesFilter<"ActiveSwap"> | string
    skill1_id?: StringWithAggregatesFilter<"ActiveSwap"> | string
    skill2_id?: StringWithAggregatesFilter<"ActiveSwap"> | string
    status?: EnumActiveSwapStatusWithAggregatesFilter<"ActiveSwap"> | $Enums.ActiveSwapStatus
    created_at?: DateTimeWithAggregatesFilter<"ActiveSwap"> | Date | string
    completed_at?: DateTimeNullableWithAggregatesFilter<"ActiveSwap"> | Date | string | null
  }

  export type SwapCompletionWhereInput = {
    AND?: SwapCompletionWhereInput | SwapCompletionWhereInput[]
    OR?: SwapCompletionWhereInput[]
    NOT?: SwapCompletionWhereInput | SwapCompletionWhereInput[]
    id?: StringFilter<"SwapCompletion"> | string
    active_swap_id?: StringFilter<"SwapCompletion"> | string
    completed_by?: StringFilter<"SwapCompletion"> | string
    rating?: IntNullableFilter<"SwapCompletion"> | number | null
    feedback?: StringNullableFilter<"SwapCompletion"> | string | null
    created_at?: DateTimeFilter<"SwapCompletion"> | Date | string
    active_swap?: XOR<ActiveSwapScalarRelationFilter, ActiveSwapWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SwapCompletionOrderByWithRelationInput = {
    id?: SortOrder
    active_swap_id?: SortOrder
    completed_by?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    created_at?: SortOrder
    active_swap?: ActiveSwapOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SwapCompletionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    active_swap_id_completed_by?: SwapCompletionActive_swap_idCompleted_byCompoundUniqueInput
    AND?: SwapCompletionWhereInput | SwapCompletionWhereInput[]
    OR?: SwapCompletionWhereInput[]
    NOT?: SwapCompletionWhereInput | SwapCompletionWhereInput[]
    active_swap_id?: StringFilter<"SwapCompletion"> | string
    completed_by?: StringFilter<"SwapCompletion"> | string
    rating?: IntNullableFilter<"SwapCompletion"> | number | null
    feedback?: StringNullableFilter<"SwapCompletion"> | string | null
    created_at?: DateTimeFilter<"SwapCompletion"> | Date | string
    active_swap?: XOR<ActiveSwapScalarRelationFilter, ActiveSwapWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "active_swap_id_completed_by">

  export type SwapCompletionOrderByWithAggregationInput = {
    id?: SortOrder
    active_swap_id?: SortOrder
    completed_by?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    created_at?: SortOrder
    _count?: SwapCompletionCountOrderByAggregateInput
    _avg?: SwapCompletionAvgOrderByAggregateInput
    _max?: SwapCompletionMaxOrderByAggregateInput
    _min?: SwapCompletionMinOrderByAggregateInput
    _sum?: SwapCompletionSumOrderByAggregateInput
  }

  export type SwapCompletionScalarWhereWithAggregatesInput = {
    AND?: SwapCompletionScalarWhereWithAggregatesInput | SwapCompletionScalarWhereWithAggregatesInput[]
    OR?: SwapCompletionScalarWhereWithAggregatesInput[]
    NOT?: SwapCompletionScalarWhereWithAggregatesInput | SwapCompletionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SwapCompletion"> | string
    active_swap_id?: StringWithAggregatesFilter<"SwapCompletion"> | string
    completed_by?: StringWithAggregatesFilter<"SwapCompletion"> | string
    rating?: IntNullableWithAggregatesFilter<"SwapCompletion"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"SwapCompletion"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"SwapCompletion"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sent_swap_requests?: SwapRequestCreateNestedManyWithoutSenderInput
    received_swap_requests?: SwapRequestCreateNestedManyWithoutReceiverInput
    active_swaps_as_user1?: ActiveSwapCreateNestedManyWithoutUser1Input
    active_swaps_as_user2?: ActiveSwapCreateNestedManyWithoutUser2Input
    swap_completions?: SwapCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sent_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutSenderInput
    received_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutReceiverInput
    active_swaps_as_user1?: ActiveSwapUncheckedCreateNestedManyWithoutUser1Input
    active_swaps_as_user2?: ActiveSwapUncheckedCreateNestedManyWithoutUser2Input
    swap_completions?: SwapCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sent_swap_requests?: SwapRequestUpdateManyWithoutSenderNestedInput
    received_swap_requests?: SwapRequestUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user1?: ActiveSwapUpdateManyWithoutUser1NestedInput
    active_swaps_as_user2?: ActiveSwapUpdateManyWithoutUser2NestedInput
    swap_completions?: SwapCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sent_swap_requests?: SwapRequestUncheckedUpdateManyWithoutSenderNestedInput
    received_swap_requests?: SwapRequestUncheckedUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user1?: ActiveSwapUncheckedUpdateManyWithoutUser1NestedInput
    active_swaps_as_user2?: ActiveSwapUncheckedUpdateManyWithoutUser2NestedInput
    swap_completions?: SwapCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    timestamp?: Date | string
    read?: boolean
    sender: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    sender_id: string
    receiver_id: string
    timestamp?: Date | string
    read?: boolean
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    sender_id: string
    receiver_id: string
    timestamp?: Date | string
    read?: boolean
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyInput = {
    content?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    user_id: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    user_id: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    title: string
    description?: string | null
    level: $Enums.Level
    achievement?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutSkillsInput
    category: SkillCategoryCreateNestedOneWithoutSkillsInput
    offered_in_requests?: SwapRequestCreateNestedManyWithoutOffered_skillInput
    requested_in_requests?: SwapRequestCreateNestedManyWithoutRequested_skillInput
    active_swaps_skill1?: ActiveSwapCreateNestedManyWithoutSkill1Input
    active_swaps_skill2?: ActiveSwapCreateNestedManyWithoutSkill2Input
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    level: $Enums.Level
    achievement?: string | null
    user_id?: string | null
    category_id: string
    created_at?: Date | string
    updated_at?: Date | string
    offered_in_requests?: SwapRequestUncheckedCreateNestedManyWithoutOffered_skillInput
    requested_in_requests?: SwapRequestUncheckedCreateNestedManyWithoutRequested_skillInput
    active_swaps_skill1?: ActiveSwapUncheckedCreateNestedManyWithoutSkill1Input
    active_swaps_skill2?: ActiveSwapUncheckedCreateNestedManyWithoutSkill2Input
  }

  export type SkillUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSkillsNestedInput
    category?: SkillCategoryUpdateOneRequiredWithoutSkillsNestedInput
    offered_in_requests?: SwapRequestUpdateManyWithoutOffered_skillNestedInput
    requested_in_requests?: SwapRequestUpdateManyWithoutRequested_skillNestedInput
    active_swaps_skill1?: ActiveSwapUpdateManyWithoutSkill1NestedInput
    active_swaps_skill2?: ActiveSwapUpdateManyWithoutSkill2NestedInput
  }

  export type SkillUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    offered_in_requests?: SwapRequestUncheckedUpdateManyWithoutOffered_skillNestedInput
    requested_in_requests?: SwapRequestUncheckedUpdateManyWithoutRequested_skillNestedInput
    active_swaps_skill1?: ActiveSwapUncheckedUpdateManyWithoutSkill1NestedInput
    active_swaps_skill2?: ActiveSwapUncheckedUpdateManyWithoutSkill2NestedInput
  }

  export type SkillCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    level: $Enums.Level
    achievement?: string | null
    user_id?: string | null
    category_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SkillUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCategoryCreateInput = {
    id?: string
    name: string
    skills?: SkillCreateNestedManyWithoutCategoryInput
  }

  export type SkillCategoryUncheckedCreateInput = {
    id?: string
    name: string
    skills?: SkillUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type SkillCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    skills?: SkillUpdateManyWithoutCategoryNestedInput
  }

  export type SkillCategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    skills?: SkillUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SkillCategoryCreateManyInput = {
    id?: string
    name: string
  }

  export type SkillCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillCategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SwapRequestCreateInput = {
    id?: string
    message?: string | null
    status?: $Enums.SwapStatus
    rejection_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    sender: UserCreateNestedOneWithoutSent_swap_requestsInput
    receiver: UserCreateNestedOneWithoutReceived_swap_requestsInput
    offered_skill: SkillCreateNestedOneWithoutOffered_in_requestsInput
    requested_skill: SkillCreateNestedOneWithoutRequested_in_requestsInput
    active_swap?: ActiveSwapCreateNestedOneWithoutSwap_requestInput
  }

  export type SwapRequestUncheckedCreateInput = {
    id?: string
    sender_id: string
    receiver_id: string
    offered_skill_id: string
    requested_skill_id: string
    message?: string | null
    status?: $Enums.SwapStatus
    rejection_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    active_swap?: ActiveSwapUncheckedCreateNestedOneWithoutSwap_requestInput
  }

  export type SwapRequestUpdateInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSent_swap_requestsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceived_swap_requestsNestedInput
    offered_skill?: SkillUpdateOneRequiredWithoutOffered_in_requestsNestedInput
    requested_skill?: SkillUpdateOneRequiredWithoutRequested_in_requestsNestedInput
    active_swap?: ActiveSwapUpdateOneWithoutSwap_requestNestedInput
  }

  export type SwapRequestUncheckedUpdateInput = {
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    offered_skill_id?: StringFieldUpdateOperationsInput | string
    requested_skill_id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active_swap?: ActiveSwapUncheckedUpdateOneWithoutSwap_requestNestedInput
  }

  export type SwapRequestCreateManyInput = {
    id?: string
    sender_id: string
    receiver_id: string
    offered_skill_id: string
    requested_skill_id: string
    message?: string | null
    status?: $Enums.SwapStatus
    rejection_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SwapRequestUpdateManyMutationInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwapRequestUncheckedUpdateManyInput = {
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    offered_skill_id?: StringFieldUpdateOperationsInput | string
    requested_skill_id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveSwapCreateInput = {
    id?: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
    swap_request: SwapRequestCreateNestedOneWithoutActive_swapInput
    user1: UserCreateNestedOneWithoutActive_swaps_as_user1Input
    user2: UserCreateNestedOneWithoutActive_swaps_as_user2Input
    skill1: SkillCreateNestedOneWithoutActive_swaps_skill1Input
    skill2: SkillCreateNestedOneWithoutActive_swaps_skill2Input
    completions?: SwapCompletionCreateNestedManyWithoutActive_swapInput
  }

  export type ActiveSwapUncheckedCreateInput = {
    id?: string
    swap_request_id: string
    user1_id: string
    user2_id: string
    skill1_id: string
    skill2_id: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
    completions?: SwapCompletionUncheckedCreateNestedManyWithoutActive_swapInput
  }

  export type ActiveSwapUpdateInput = {
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    swap_request?: SwapRequestUpdateOneRequiredWithoutActive_swapNestedInput
    user1?: UserUpdateOneRequiredWithoutActive_swaps_as_user1NestedInput
    user2?: UserUpdateOneRequiredWithoutActive_swaps_as_user2NestedInput
    skill1?: SkillUpdateOneRequiredWithoutActive_swaps_skill1NestedInput
    skill2?: SkillUpdateOneRequiredWithoutActive_swaps_skill2NestedInput
    completions?: SwapCompletionUpdateManyWithoutActive_swapNestedInput
  }

  export type ActiveSwapUncheckedUpdateInput = {
    swap_request_id?: StringFieldUpdateOperationsInput | string
    user1_id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    skill1_id?: StringFieldUpdateOperationsInput | string
    skill2_id?: StringFieldUpdateOperationsInput | string
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completions?: SwapCompletionUncheckedUpdateManyWithoutActive_swapNestedInput
  }

  export type ActiveSwapCreateManyInput = {
    id?: string
    swap_request_id: string
    user1_id: string
    user2_id: string
    skill1_id: string
    skill2_id: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type ActiveSwapUpdateManyMutationInput = {
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActiveSwapUncheckedUpdateManyInput = {
    swap_request_id?: StringFieldUpdateOperationsInput | string
    user1_id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    skill1_id?: StringFieldUpdateOperationsInput | string
    skill2_id?: StringFieldUpdateOperationsInput | string
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SwapCompletionCreateInput = {
    id?: string
    rating?: number | null
    feedback?: string | null
    created_at?: Date | string
    active_swap: ActiveSwapCreateNestedOneWithoutCompletionsInput
    user: UserCreateNestedOneWithoutSwap_completionsInput
  }

  export type SwapCompletionUncheckedCreateInput = {
    id?: string
    active_swap_id: string
    completed_by: string
    rating?: number | null
    feedback?: string | null
    created_at?: Date | string
  }

  export type SwapCompletionUpdateInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active_swap?: ActiveSwapUpdateOneRequiredWithoutCompletionsNestedInput
    user?: UserUpdateOneRequiredWithoutSwap_completionsNestedInput
  }

  export type SwapCompletionUncheckedUpdateInput = {
    active_swap_id?: StringFieldUpdateOperationsInput | string
    completed_by?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwapCompletionCreateManyInput = {
    id?: string
    active_swap_id: string
    completed_by: string
    rating?: number | null
    feedback?: string | null
    created_at?: Date | string
  }

  export type SwapCompletionUpdateManyMutationInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwapCompletionUncheckedUpdateManyInput = {
    active_swap_id?: StringFieldUpdateOperationsInput | string
    completed_by?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SwapRequestListRelationFilter = {
    every?: SwapRequestWhereInput
    some?: SwapRequestWhereInput
    none?: SwapRequestWhereInput
  }

  export type ActiveSwapListRelationFilter = {
    every?: ActiveSwapWhereInput
    some?: ActiveSwapWhereInput
    none?: ActiveSwapWhereInput
  }

  export type SwapCompletionListRelationFilter = {
    every?: SwapCompletionWhereInput
    some?: SwapCompletionWhereInput
    none?: SwapCompletionWhereInput
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SwapRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActiveSwapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SwapCompletionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_admin?: SortOrder
    is_super_admin?: SortOrder
    is_verified?: SortOrder
    otp?: SortOrder
    otp_expiry?: SortOrder
    reset_token?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_admin?: SortOrder
    is_super_admin?: SortOrder
    is_verified?: SortOrder
    otp?: SortOrder
    otp_expiry?: SortOrder
    reset_token?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_admin?: SortOrder
    is_super_admin?: SortOrder
    is_verified?: SortOrder
    otp?: SortOrder
    otp_expiry?: SortOrder
    reset_token?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    timestamp?: SortOrder
    read?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    timestamp?: SortOrder
    read?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    timestamp?: SortOrder
    read?: SortOrder
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SkillCategoryScalarRelationFilter = {
    is?: SkillCategoryWhereInput
    isNot?: SkillCategoryWhereInput
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    achievement?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    achievement?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    achievement?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLevelFilter<$PrismaModel>
    _max?: NestedEnumLevelFilter<$PrismaModel>
  }

  export type SkillCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EnumSwapStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SwapStatus | EnumSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SwapStatus[] | ListEnumSwapStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwapStatus[] | ListEnumSwapStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSwapStatusFilter<$PrismaModel> | $Enums.SwapStatus
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type ActiveSwapNullableScalarRelationFilter = {
    is?: ActiveSwapWhereInput | null
    isNot?: ActiveSwapWhereInput | null
  }

  export type SwapRequestCountOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    offered_skill_id?: SortOrder
    requested_skill_id?: SortOrder
    message?: SortOrder
    status?: SortOrder
    rejection_reason?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SwapRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    offered_skill_id?: SortOrder
    requested_skill_id?: SortOrder
    message?: SortOrder
    status?: SortOrder
    rejection_reason?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SwapRequestMinOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    offered_skill_id?: SortOrder
    requested_skill_id?: SortOrder
    message?: SortOrder
    status?: SortOrder
    rejection_reason?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumSwapStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwapStatus | EnumSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SwapStatus[] | ListEnumSwapStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwapStatus[] | ListEnumSwapStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSwapStatusWithAggregatesFilter<$PrismaModel> | $Enums.SwapStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwapStatusFilter<$PrismaModel>
    _max?: NestedEnumSwapStatusFilter<$PrismaModel>
  }

  export type EnumActiveSwapStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ActiveSwapStatus | EnumActiveSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ActiveSwapStatus[] | ListEnumActiveSwapStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActiveSwapStatus[] | ListEnumActiveSwapStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumActiveSwapStatusFilter<$PrismaModel> | $Enums.ActiveSwapStatus
  }

  export type SwapRequestScalarRelationFilter = {
    is?: SwapRequestWhereInput
    isNot?: SwapRequestWhereInput
  }

  export type ActiveSwapCountOrderByAggregateInput = {
    id?: SortOrder
    swap_request_id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    skill1_id?: SortOrder
    skill2_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
  }

  export type ActiveSwapMaxOrderByAggregateInput = {
    id?: SortOrder
    swap_request_id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    skill1_id?: SortOrder
    skill2_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
  }

  export type ActiveSwapMinOrderByAggregateInput = {
    id?: SortOrder
    swap_request_id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    skill1_id?: SortOrder
    skill2_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
  }

  export type EnumActiveSwapStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActiveSwapStatus | EnumActiveSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ActiveSwapStatus[] | ListEnumActiveSwapStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActiveSwapStatus[] | ListEnumActiveSwapStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumActiveSwapStatusWithAggregatesFilter<$PrismaModel> | $Enums.ActiveSwapStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActiveSwapStatusFilter<$PrismaModel>
    _max?: NestedEnumActiveSwapStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type ActiveSwapScalarRelationFilter = {
    is?: ActiveSwapWhereInput
    isNot?: ActiveSwapWhereInput
  }

  export type SwapCompletionActive_swap_idCompleted_byCompoundUniqueInput = {
    active_swap_id: string
    completed_by: string
  }

  export type SwapCompletionCountOrderByAggregateInput = {
    id?: SortOrder
    active_swap_id?: SortOrder
    completed_by?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    created_at?: SortOrder
  }

  export type SwapCompletionAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type SwapCompletionMaxOrderByAggregateInput = {
    id?: SortOrder
    active_swap_id?: SortOrder
    completed_by?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    created_at?: SortOrder
  }

  export type SwapCompletionMinOrderByAggregateInput = {
    id?: SortOrder
    active_swap_id?: SortOrder
    completed_by?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    created_at?: SortOrder
  }

  export type SwapCompletionSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type SkillCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type SwapRequestCreateNestedManyWithoutSenderInput = {
    create?: XOR<SwapRequestCreateWithoutSenderInput, SwapRequestUncheckedCreateWithoutSenderInput> | SwapRequestCreateWithoutSenderInput[] | SwapRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutSenderInput | SwapRequestCreateOrConnectWithoutSenderInput[]
    createMany?: SwapRequestCreateManySenderInputEnvelope
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
  }

  export type SwapRequestCreateNestedManyWithoutReceiverInput = {
    create?: XOR<SwapRequestCreateWithoutReceiverInput, SwapRequestUncheckedCreateWithoutReceiverInput> | SwapRequestCreateWithoutReceiverInput[] | SwapRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutReceiverInput | SwapRequestCreateOrConnectWithoutReceiverInput[]
    createMany?: SwapRequestCreateManyReceiverInputEnvelope
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
  }

  export type ActiveSwapCreateNestedManyWithoutUser1Input = {
    create?: XOR<ActiveSwapCreateWithoutUser1Input, ActiveSwapUncheckedCreateWithoutUser1Input> | ActiveSwapCreateWithoutUser1Input[] | ActiveSwapUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutUser1Input | ActiveSwapCreateOrConnectWithoutUser1Input[]
    createMany?: ActiveSwapCreateManyUser1InputEnvelope
    connect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
  }

  export type ActiveSwapCreateNestedManyWithoutUser2Input = {
    create?: XOR<ActiveSwapCreateWithoutUser2Input, ActiveSwapUncheckedCreateWithoutUser2Input> | ActiveSwapCreateWithoutUser2Input[] | ActiveSwapUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutUser2Input | ActiveSwapCreateOrConnectWithoutUser2Input[]
    createMany?: ActiveSwapCreateManyUser2InputEnvelope
    connect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
  }

  export type SwapCompletionCreateNestedManyWithoutUserInput = {
    create?: XOR<SwapCompletionCreateWithoutUserInput, SwapCompletionUncheckedCreateWithoutUserInput> | SwapCompletionCreateWithoutUserInput[] | SwapCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwapCompletionCreateOrConnectWithoutUserInput | SwapCompletionCreateOrConnectWithoutUserInput[]
    createMany?: SwapCompletionCreateManyUserInputEnvelope
    connect?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type SwapRequestUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<SwapRequestCreateWithoutSenderInput, SwapRequestUncheckedCreateWithoutSenderInput> | SwapRequestCreateWithoutSenderInput[] | SwapRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutSenderInput | SwapRequestCreateOrConnectWithoutSenderInput[]
    createMany?: SwapRequestCreateManySenderInputEnvelope
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
  }

  export type SwapRequestUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<SwapRequestCreateWithoutReceiverInput, SwapRequestUncheckedCreateWithoutReceiverInput> | SwapRequestCreateWithoutReceiverInput[] | SwapRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutReceiverInput | SwapRequestCreateOrConnectWithoutReceiverInput[]
    createMany?: SwapRequestCreateManyReceiverInputEnvelope
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
  }

  export type ActiveSwapUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<ActiveSwapCreateWithoutUser1Input, ActiveSwapUncheckedCreateWithoutUser1Input> | ActiveSwapCreateWithoutUser1Input[] | ActiveSwapUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutUser1Input | ActiveSwapCreateOrConnectWithoutUser1Input[]
    createMany?: ActiveSwapCreateManyUser1InputEnvelope
    connect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
  }

  export type ActiveSwapUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<ActiveSwapCreateWithoutUser2Input, ActiveSwapUncheckedCreateWithoutUser2Input> | ActiveSwapCreateWithoutUser2Input[] | ActiveSwapUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutUser2Input | ActiveSwapCreateOrConnectWithoutUser2Input[]
    createMany?: ActiveSwapCreateManyUser2InputEnvelope
    connect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
  }

  export type SwapCompletionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SwapCompletionCreateWithoutUserInput, SwapCompletionUncheckedCreateWithoutUserInput> | SwapCompletionCreateWithoutUserInput[] | SwapCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwapCompletionCreateOrConnectWithoutUserInput | SwapCompletionCreateOrConnectWithoutUserInput[]
    createMany?: SwapCompletionCreateManyUserInputEnvelope
    connect?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type SkillUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutUserInput | SkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutUserInput | SkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutUserInput | SkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type SwapRequestUpdateManyWithoutSenderNestedInput = {
    create?: XOR<SwapRequestCreateWithoutSenderInput, SwapRequestUncheckedCreateWithoutSenderInput> | SwapRequestCreateWithoutSenderInput[] | SwapRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutSenderInput | SwapRequestCreateOrConnectWithoutSenderInput[]
    upsert?: SwapRequestUpsertWithWhereUniqueWithoutSenderInput | SwapRequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: SwapRequestCreateManySenderInputEnvelope
    set?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    disconnect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    delete?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    update?: SwapRequestUpdateWithWhereUniqueWithoutSenderInput | SwapRequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: SwapRequestUpdateManyWithWhereWithoutSenderInput | SwapRequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
  }

  export type SwapRequestUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<SwapRequestCreateWithoutReceiverInput, SwapRequestUncheckedCreateWithoutReceiverInput> | SwapRequestCreateWithoutReceiverInput[] | SwapRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutReceiverInput | SwapRequestCreateOrConnectWithoutReceiverInput[]
    upsert?: SwapRequestUpsertWithWhereUniqueWithoutReceiverInput | SwapRequestUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: SwapRequestCreateManyReceiverInputEnvelope
    set?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    disconnect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    delete?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    update?: SwapRequestUpdateWithWhereUniqueWithoutReceiverInput | SwapRequestUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: SwapRequestUpdateManyWithWhereWithoutReceiverInput | SwapRequestUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
  }

  export type ActiveSwapUpdateManyWithoutUser1NestedInput = {
    create?: XOR<ActiveSwapCreateWithoutUser1Input, ActiveSwapUncheckedCreateWithoutUser1Input> | ActiveSwapCreateWithoutUser1Input[] | ActiveSwapUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutUser1Input | ActiveSwapCreateOrConnectWithoutUser1Input[]
    upsert?: ActiveSwapUpsertWithWhereUniqueWithoutUser1Input | ActiveSwapUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: ActiveSwapCreateManyUser1InputEnvelope
    set?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    disconnect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    delete?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    connect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    update?: ActiveSwapUpdateWithWhereUniqueWithoutUser1Input | ActiveSwapUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: ActiveSwapUpdateManyWithWhereWithoutUser1Input | ActiveSwapUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: ActiveSwapScalarWhereInput | ActiveSwapScalarWhereInput[]
  }

  export type ActiveSwapUpdateManyWithoutUser2NestedInput = {
    create?: XOR<ActiveSwapCreateWithoutUser2Input, ActiveSwapUncheckedCreateWithoutUser2Input> | ActiveSwapCreateWithoutUser2Input[] | ActiveSwapUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutUser2Input | ActiveSwapCreateOrConnectWithoutUser2Input[]
    upsert?: ActiveSwapUpsertWithWhereUniqueWithoutUser2Input | ActiveSwapUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: ActiveSwapCreateManyUser2InputEnvelope
    set?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    disconnect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    delete?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    connect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    update?: ActiveSwapUpdateWithWhereUniqueWithoutUser2Input | ActiveSwapUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: ActiveSwapUpdateManyWithWhereWithoutUser2Input | ActiveSwapUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: ActiveSwapScalarWhereInput | ActiveSwapScalarWhereInput[]
  }

  export type SwapCompletionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SwapCompletionCreateWithoutUserInput, SwapCompletionUncheckedCreateWithoutUserInput> | SwapCompletionCreateWithoutUserInput[] | SwapCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwapCompletionCreateOrConnectWithoutUserInput | SwapCompletionCreateOrConnectWithoutUserInput[]
    upsert?: SwapCompletionUpsertWithWhereUniqueWithoutUserInput | SwapCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SwapCompletionCreateManyUserInputEnvelope
    set?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
    disconnect?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
    delete?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
    connect?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
    update?: SwapCompletionUpdateWithWhereUniqueWithoutUserInput | SwapCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SwapCompletionUpdateManyWithWhereWithoutUserInput | SwapCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SwapCompletionScalarWhereInput | SwapCompletionScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutUserInput | SkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutUserInput | SkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutUserInput | SkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type SwapRequestUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<SwapRequestCreateWithoutSenderInput, SwapRequestUncheckedCreateWithoutSenderInput> | SwapRequestCreateWithoutSenderInput[] | SwapRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutSenderInput | SwapRequestCreateOrConnectWithoutSenderInput[]
    upsert?: SwapRequestUpsertWithWhereUniqueWithoutSenderInput | SwapRequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: SwapRequestCreateManySenderInputEnvelope
    set?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    disconnect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    delete?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    update?: SwapRequestUpdateWithWhereUniqueWithoutSenderInput | SwapRequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: SwapRequestUpdateManyWithWhereWithoutSenderInput | SwapRequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
  }

  export type SwapRequestUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<SwapRequestCreateWithoutReceiverInput, SwapRequestUncheckedCreateWithoutReceiverInput> | SwapRequestCreateWithoutReceiverInput[] | SwapRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutReceiverInput | SwapRequestCreateOrConnectWithoutReceiverInput[]
    upsert?: SwapRequestUpsertWithWhereUniqueWithoutReceiverInput | SwapRequestUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: SwapRequestCreateManyReceiverInputEnvelope
    set?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    disconnect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    delete?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    update?: SwapRequestUpdateWithWhereUniqueWithoutReceiverInput | SwapRequestUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: SwapRequestUpdateManyWithWhereWithoutReceiverInput | SwapRequestUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
  }

  export type ActiveSwapUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<ActiveSwapCreateWithoutUser1Input, ActiveSwapUncheckedCreateWithoutUser1Input> | ActiveSwapCreateWithoutUser1Input[] | ActiveSwapUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutUser1Input | ActiveSwapCreateOrConnectWithoutUser1Input[]
    upsert?: ActiveSwapUpsertWithWhereUniqueWithoutUser1Input | ActiveSwapUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: ActiveSwapCreateManyUser1InputEnvelope
    set?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    disconnect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    delete?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    connect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    update?: ActiveSwapUpdateWithWhereUniqueWithoutUser1Input | ActiveSwapUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: ActiveSwapUpdateManyWithWhereWithoutUser1Input | ActiveSwapUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: ActiveSwapScalarWhereInput | ActiveSwapScalarWhereInput[]
  }

  export type ActiveSwapUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<ActiveSwapCreateWithoutUser2Input, ActiveSwapUncheckedCreateWithoutUser2Input> | ActiveSwapCreateWithoutUser2Input[] | ActiveSwapUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutUser2Input | ActiveSwapCreateOrConnectWithoutUser2Input[]
    upsert?: ActiveSwapUpsertWithWhereUniqueWithoutUser2Input | ActiveSwapUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: ActiveSwapCreateManyUser2InputEnvelope
    set?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    disconnect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    delete?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    connect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    update?: ActiveSwapUpdateWithWhereUniqueWithoutUser2Input | ActiveSwapUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: ActiveSwapUpdateManyWithWhereWithoutUser2Input | ActiveSwapUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: ActiveSwapScalarWhereInput | ActiveSwapScalarWhereInput[]
  }

  export type SwapCompletionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SwapCompletionCreateWithoutUserInput, SwapCompletionUncheckedCreateWithoutUserInput> | SwapCompletionCreateWithoutUserInput[] | SwapCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwapCompletionCreateOrConnectWithoutUserInput | SwapCompletionCreateOrConnectWithoutUserInput[]
    upsert?: SwapCompletionUpsertWithWhereUniqueWithoutUserInput | SwapCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SwapCompletionCreateManyUserInputEnvelope
    set?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
    disconnect?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
    delete?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
    connect?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
    update?: SwapCompletionUpdateWithWhereUniqueWithoutUserInput | SwapCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SwapCompletionUpdateManyWithWhereWithoutUserInput | SwapCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SwapCompletionScalarWhereInput | SwapCompletionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserCreateNestedOneWithoutSkillsInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    connect?: UserWhereUniqueInput
  }

  export type SkillCategoryCreateNestedOneWithoutSkillsInput = {
    create?: XOR<SkillCategoryCreateWithoutSkillsInput, SkillCategoryUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: SkillCategoryCreateOrConnectWithoutSkillsInput
    connect?: SkillCategoryWhereUniqueInput
  }

  export type SwapRequestCreateNestedManyWithoutOffered_skillInput = {
    create?: XOR<SwapRequestCreateWithoutOffered_skillInput, SwapRequestUncheckedCreateWithoutOffered_skillInput> | SwapRequestCreateWithoutOffered_skillInput[] | SwapRequestUncheckedCreateWithoutOffered_skillInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutOffered_skillInput | SwapRequestCreateOrConnectWithoutOffered_skillInput[]
    createMany?: SwapRequestCreateManyOffered_skillInputEnvelope
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
  }

  export type SwapRequestCreateNestedManyWithoutRequested_skillInput = {
    create?: XOR<SwapRequestCreateWithoutRequested_skillInput, SwapRequestUncheckedCreateWithoutRequested_skillInput> | SwapRequestCreateWithoutRequested_skillInput[] | SwapRequestUncheckedCreateWithoutRequested_skillInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutRequested_skillInput | SwapRequestCreateOrConnectWithoutRequested_skillInput[]
    createMany?: SwapRequestCreateManyRequested_skillInputEnvelope
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
  }

  export type ActiveSwapCreateNestedManyWithoutSkill1Input = {
    create?: XOR<ActiveSwapCreateWithoutSkill1Input, ActiveSwapUncheckedCreateWithoutSkill1Input> | ActiveSwapCreateWithoutSkill1Input[] | ActiveSwapUncheckedCreateWithoutSkill1Input[]
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutSkill1Input | ActiveSwapCreateOrConnectWithoutSkill1Input[]
    createMany?: ActiveSwapCreateManySkill1InputEnvelope
    connect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
  }

  export type ActiveSwapCreateNestedManyWithoutSkill2Input = {
    create?: XOR<ActiveSwapCreateWithoutSkill2Input, ActiveSwapUncheckedCreateWithoutSkill2Input> | ActiveSwapCreateWithoutSkill2Input[] | ActiveSwapUncheckedCreateWithoutSkill2Input[]
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutSkill2Input | ActiveSwapCreateOrConnectWithoutSkill2Input[]
    createMany?: ActiveSwapCreateManySkill2InputEnvelope
    connect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
  }

  export type SwapRequestUncheckedCreateNestedManyWithoutOffered_skillInput = {
    create?: XOR<SwapRequestCreateWithoutOffered_skillInput, SwapRequestUncheckedCreateWithoutOffered_skillInput> | SwapRequestCreateWithoutOffered_skillInput[] | SwapRequestUncheckedCreateWithoutOffered_skillInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutOffered_skillInput | SwapRequestCreateOrConnectWithoutOffered_skillInput[]
    createMany?: SwapRequestCreateManyOffered_skillInputEnvelope
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
  }

  export type SwapRequestUncheckedCreateNestedManyWithoutRequested_skillInput = {
    create?: XOR<SwapRequestCreateWithoutRequested_skillInput, SwapRequestUncheckedCreateWithoutRequested_skillInput> | SwapRequestCreateWithoutRequested_skillInput[] | SwapRequestUncheckedCreateWithoutRequested_skillInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutRequested_skillInput | SwapRequestCreateOrConnectWithoutRequested_skillInput[]
    createMany?: SwapRequestCreateManyRequested_skillInputEnvelope
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
  }

  export type ActiveSwapUncheckedCreateNestedManyWithoutSkill1Input = {
    create?: XOR<ActiveSwapCreateWithoutSkill1Input, ActiveSwapUncheckedCreateWithoutSkill1Input> | ActiveSwapCreateWithoutSkill1Input[] | ActiveSwapUncheckedCreateWithoutSkill1Input[]
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutSkill1Input | ActiveSwapCreateOrConnectWithoutSkill1Input[]
    createMany?: ActiveSwapCreateManySkill1InputEnvelope
    connect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
  }

  export type ActiveSwapUncheckedCreateNestedManyWithoutSkill2Input = {
    create?: XOR<ActiveSwapCreateWithoutSkill2Input, ActiveSwapUncheckedCreateWithoutSkill2Input> | ActiveSwapCreateWithoutSkill2Input[] | ActiveSwapUncheckedCreateWithoutSkill2Input[]
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutSkill2Input | ActiveSwapCreateOrConnectWithoutSkill2Input[]
    createMany?: ActiveSwapCreateManySkill2InputEnvelope
    connect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
  }

  export type EnumLevelFieldUpdateOperationsInput = {
    set?: $Enums.Level
  }

  export type UserUpdateOneWithoutSkillsNestedInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    upsert?: UserUpsertWithoutSkillsInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillsInput, UserUpdateWithoutSkillsInput>, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillCategoryUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<SkillCategoryCreateWithoutSkillsInput, SkillCategoryUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: SkillCategoryCreateOrConnectWithoutSkillsInput
    upsert?: SkillCategoryUpsertWithoutSkillsInput
    connect?: SkillCategoryWhereUniqueInput
    update?: XOR<XOR<SkillCategoryUpdateToOneWithWhereWithoutSkillsInput, SkillCategoryUpdateWithoutSkillsInput>, SkillCategoryUncheckedUpdateWithoutSkillsInput>
  }

  export type SwapRequestUpdateManyWithoutOffered_skillNestedInput = {
    create?: XOR<SwapRequestCreateWithoutOffered_skillInput, SwapRequestUncheckedCreateWithoutOffered_skillInput> | SwapRequestCreateWithoutOffered_skillInput[] | SwapRequestUncheckedCreateWithoutOffered_skillInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutOffered_skillInput | SwapRequestCreateOrConnectWithoutOffered_skillInput[]
    upsert?: SwapRequestUpsertWithWhereUniqueWithoutOffered_skillInput | SwapRequestUpsertWithWhereUniqueWithoutOffered_skillInput[]
    createMany?: SwapRequestCreateManyOffered_skillInputEnvelope
    set?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    disconnect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    delete?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    update?: SwapRequestUpdateWithWhereUniqueWithoutOffered_skillInput | SwapRequestUpdateWithWhereUniqueWithoutOffered_skillInput[]
    updateMany?: SwapRequestUpdateManyWithWhereWithoutOffered_skillInput | SwapRequestUpdateManyWithWhereWithoutOffered_skillInput[]
    deleteMany?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
  }

  export type SwapRequestUpdateManyWithoutRequested_skillNestedInput = {
    create?: XOR<SwapRequestCreateWithoutRequested_skillInput, SwapRequestUncheckedCreateWithoutRequested_skillInput> | SwapRequestCreateWithoutRequested_skillInput[] | SwapRequestUncheckedCreateWithoutRequested_skillInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutRequested_skillInput | SwapRequestCreateOrConnectWithoutRequested_skillInput[]
    upsert?: SwapRequestUpsertWithWhereUniqueWithoutRequested_skillInput | SwapRequestUpsertWithWhereUniqueWithoutRequested_skillInput[]
    createMany?: SwapRequestCreateManyRequested_skillInputEnvelope
    set?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    disconnect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    delete?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    update?: SwapRequestUpdateWithWhereUniqueWithoutRequested_skillInput | SwapRequestUpdateWithWhereUniqueWithoutRequested_skillInput[]
    updateMany?: SwapRequestUpdateManyWithWhereWithoutRequested_skillInput | SwapRequestUpdateManyWithWhereWithoutRequested_skillInput[]
    deleteMany?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
  }

  export type ActiveSwapUpdateManyWithoutSkill1NestedInput = {
    create?: XOR<ActiveSwapCreateWithoutSkill1Input, ActiveSwapUncheckedCreateWithoutSkill1Input> | ActiveSwapCreateWithoutSkill1Input[] | ActiveSwapUncheckedCreateWithoutSkill1Input[]
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutSkill1Input | ActiveSwapCreateOrConnectWithoutSkill1Input[]
    upsert?: ActiveSwapUpsertWithWhereUniqueWithoutSkill1Input | ActiveSwapUpsertWithWhereUniqueWithoutSkill1Input[]
    createMany?: ActiveSwapCreateManySkill1InputEnvelope
    set?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    disconnect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    delete?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    connect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    update?: ActiveSwapUpdateWithWhereUniqueWithoutSkill1Input | ActiveSwapUpdateWithWhereUniqueWithoutSkill1Input[]
    updateMany?: ActiveSwapUpdateManyWithWhereWithoutSkill1Input | ActiveSwapUpdateManyWithWhereWithoutSkill1Input[]
    deleteMany?: ActiveSwapScalarWhereInput | ActiveSwapScalarWhereInput[]
  }

  export type ActiveSwapUpdateManyWithoutSkill2NestedInput = {
    create?: XOR<ActiveSwapCreateWithoutSkill2Input, ActiveSwapUncheckedCreateWithoutSkill2Input> | ActiveSwapCreateWithoutSkill2Input[] | ActiveSwapUncheckedCreateWithoutSkill2Input[]
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutSkill2Input | ActiveSwapCreateOrConnectWithoutSkill2Input[]
    upsert?: ActiveSwapUpsertWithWhereUniqueWithoutSkill2Input | ActiveSwapUpsertWithWhereUniqueWithoutSkill2Input[]
    createMany?: ActiveSwapCreateManySkill2InputEnvelope
    set?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    disconnect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    delete?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    connect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    update?: ActiveSwapUpdateWithWhereUniqueWithoutSkill2Input | ActiveSwapUpdateWithWhereUniqueWithoutSkill2Input[]
    updateMany?: ActiveSwapUpdateManyWithWhereWithoutSkill2Input | ActiveSwapUpdateManyWithWhereWithoutSkill2Input[]
    deleteMany?: ActiveSwapScalarWhereInput | ActiveSwapScalarWhereInput[]
  }

  export type SwapRequestUncheckedUpdateManyWithoutOffered_skillNestedInput = {
    create?: XOR<SwapRequestCreateWithoutOffered_skillInput, SwapRequestUncheckedCreateWithoutOffered_skillInput> | SwapRequestCreateWithoutOffered_skillInput[] | SwapRequestUncheckedCreateWithoutOffered_skillInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutOffered_skillInput | SwapRequestCreateOrConnectWithoutOffered_skillInput[]
    upsert?: SwapRequestUpsertWithWhereUniqueWithoutOffered_skillInput | SwapRequestUpsertWithWhereUniqueWithoutOffered_skillInput[]
    createMany?: SwapRequestCreateManyOffered_skillInputEnvelope
    set?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    disconnect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    delete?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    update?: SwapRequestUpdateWithWhereUniqueWithoutOffered_skillInput | SwapRequestUpdateWithWhereUniqueWithoutOffered_skillInput[]
    updateMany?: SwapRequestUpdateManyWithWhereWithoutOffered_skillInput | SwapRequestUpdateManyWithWhereWithoutOffered_skillInput[]
    deleteMany?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
  }

  export type SwapRequestUncheckedUpdateManyWithoutRequested_skillNestedInput = {
    create?: XOR<SwapRequestCreateWithoutRequested_skillInput, SwapRequestUncheckedCreateWithoutRequested_skillInput> | SwapRequestCreateWithoutRequested_skillInput[] | SwapRequestUncheckedCreateWithoutRequested_skillInput[]
    connectOrCreate?: SwapRequestCreateOrConnectWithoutRequested_skillInput | SwapRequestCreateOrConnectWithoutRequested_skillInput[]
    upsert?: SwapRequestUpsertWithWhereUniqueWithoutRequested_skillInput | SwapRequestUpsertWithWhereUniqueWithoutRequested_skillInput[]
    createMany?: SwapRequestCreateManyRequested_skillInputEnvelope
    set?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    disconnect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    delete?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    connect?: SwapRequestWhereUniqueInput | SwapRequestWhereUniqueInput[]
    update?: SwapRequestUpdateWithWhereUniqueWithoutRequested_skillInput | SwapRequestUpdateWithWhereUniqueWithoutRequested_skillInput[]
    updateMany?: SwapRequestUpdateManyWithWhereWithoutRequested_skillInput | SwapRequestUpdateManyWithWhereWithoutRequested_skillInput[]
    deleteMany?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
  }

  export type ActiveSwapUncheckedUpdateManyWithoutSkill1NestedInput = {
    create?: XOR<ActiveSwapCreateWithoutSkill1Input, ActiveSwapUncheckedCreateWithoutSkill1Input> | ActiveSwapCreateWithoutSkill1Input[] | ActiveSwapUncheckedCreateWithoutSkill1Input[]
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutSkill1Input | ActiveSwapCreateOrConnectWithoutSkill1Input[]
    upsert?: ActiveSwapUpsertWithWhereUniqueWithoutSkill1Input | ActiveSwapUpsertWithWhereUniqueWithoutSkill1Input[]
    createMany?: ActiveSwapCreateManySkill1InputEnvelope
    set?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    disconnect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    delete?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    connect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    update?: ActiveSwapUpdateWithWhereUniqueWithoutSkill1Input | ActiveSwapUpdateWithWhereUniqueWithoutSkill1Input[]
    updateMany?: ActiveSwapUpdateManyWithWhereWithoutSkill1Input | ActiveSwapUpdateManyWithWhereWithoutSkill1Input[]
    deleteMany?: ActiveSwapScalarWhereInput | ActiveSwapScalarWhereInput[]
  }

  export type ActiveSwapUncheckedUpdateManyWithoutSkill2NestedInput = {
    create?: XOR<ActiveSwapCreateWithoutSkill2Input, ActiveSwapUncheckedCreateWithoutSkill2Input> | ActiveSwapCreateWithoutSkill2Input[] | ActiveSwapUncheckedCreateWithoutSkill2Input[]
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutSkill2Input | ActiveSwapCreateOrConnectWithoutSkill2Input[]
    upsert?: ActiveSwapUpsertWithWhereUniqueWithoutSkill2Input | ActiveSwapUpsertWithWhereUniqueWithoutSkill2Input[]
    createMany?: ActiveSwapCreateManySkill2InputEnvelope
    set?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    disconnect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    delete?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    connect?: ActiveSwapWhereUniqueInput | ActiveSwapWhereUniqueInput[]
    update?: ActiveSwapUpdateWithWhereUniqueWithoutSkill2Input | ActiveSwapUpdateWithWhereUniqueWithoutSkill2Input[]
    updateMany?: ActiveSwapUpdateManyWithWhereWithoutSkill2Input | ActiveSwapUpdateManyWithWhereWithoutSkill2Input[]
    deleteMany?: ActiveSwapScalarWhereInput | ActiveSwapScalarWhereInput[]
  }

  export type SkillCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput> | SkillCreateWithoutCategoryInput[] | SkillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutCategoryInput | SkillCreateOrConnectWithoutCategoryInput[]
    createMany?: SkillCreateManyCategoryInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput> | SkillCreateWithoutCategoryInput[] | SkillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutCategoryInput | SkillCreateOrConnectWithoutCategoryInput[]
    createMany?: SkillCreateManyCategoryInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type SkillUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput> | SkillCreateWithoutCategoryInput[] | SkillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutCategoryInput | SkillCreateOrConnectWithoutCategoryInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutCategoryInput | SkillUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SkillCreateManyCategoryInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutCategoryInput | SkillUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutCategoryInput | SkillUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput> | SkillCreateWithoutCategoryInput[] | SkillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutCategoryInput | SkillCreateOrConnectWithoutCategoryInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutCategoryInput | SkillUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SkillCreateManyCategoryInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutCategoryInput | SkillUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutCategoryInput | SkillUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSent_swap_requestsInput = {
    create?: XOR<UserCreateWithoutSent_swap_requestsInput, UserUncheckedCreateWithoutSent_swap_requestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSent_swap_requestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceived_swap_requestsInput = {
    create?: XOR<UserCreateWithoutReceived_swap_requestsInput, UserUncheckedCreateWithoutReceived_swap_requestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceived_swap_requestsInput
    connect?: UserWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutOffered_in_requestsInput = {
    create?: XOR<SkillCreateWithoutOffered_in_requestsInput, SkillUncheckedCreateWithoutOffered_in_requestsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutOffered_in_requestsInput
    connect?: SkillWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutRequested_in_requestsInput = {
    create?: XOR<SkillCreateWithoutRequested_in_requestsInput, SkillUncheckedCreateWithoutRequested_in_requestsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutRequested_in_requestsInput
    connect?: SkillWhereUniqueInput
  }

  export type ActiveSwapCreateNestedOneWithoutSwap_requestInput = {
    create?: XOR<ActiveSwapCreateWithoutSwap_requestInput, ActiveSwapUncheckedCreateWithoutSwap_requestInput>
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutSwap_requestInput
    connect?: ActiveSwapWhereUniqueInput
  }

  export type ActiveSwapUncheckedCreateNestedOneWithoutSwap_requestInput = {
    create?: XOR<ActiveSwapCreateWithoutSwap_requestInput, ActiveSwapUncheckedCreateWithoutSwap_requestInput>
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutSwap_requestInput
    connect?: ActiveSwapWhereUniqueInput
  }

  export type EnumSwapStatusFieldUpdateOperationsInput = {
    set?: $Enums.SwapStatus
  }

  export type UserUpdateOneRequiredWithoutSent_swap_requestsNestedInput = {
    create?: XOR<UserCreateWithoutSent_swap_requestsInput, UserUncheckedCreateWithoutSent_swap_requestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSent_swap_requestsInput
    upsert?: UserUpsertWithoutSent_swap_requestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSent_swap_requestsInput, UserUpdateWithoutSent_swap_requestsInput>, UserUncheckedUpdateWithoutSent_swap_requestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceived_swap_requestsNestedInput = {
    create?: XOR<UserCreateWithoutReceived_swap_requestsInput, UserUncheckedCreateWithoutReceived_swap_requestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceived_swap_requestsInput
    upsert?: UserUpsertWithoutReceived_swap_requestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceived_swap_requestsInput, UserUpdateWithoutReceived_swap_requestsInput>, UserUncheckedUpdateWithoutReceived_swap_requestsInput>
  }

  export type SkillUpdateOneRequiredWithoutOffered_in_requestsNestedInput = {
    create?: XOR<SkillCreateWithoutOffered_in_requestsInput, SkillUncheckedCreateWithoutOffered_in_requestsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutOffered_in_requestsInput
    upsert?: SkillUpsertWithoutOffered_in_requestsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutOffered_in_requestsInput, SkillUpdateWithoutOffered_in_requestsInput>, SkillUncheckedUpdateWithoutOffered_in_requestsInput>
  }

  export type SkillUpdateOneRequiredWithoutRequested_in_requestsNestedInput = {
    create?: XOR<SkillCreateWithoutRequested_in_requestsInput, SkillUncheckedCreateWithoutRequested_in_requestsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutRequested_in_requestsInput
    upsert?: SkillUpsertWithoutRequested_in_requestsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutRequested_in_requestsInput, SkillUpdateWithoutRequested_in_requestsInput>, SkillUncheckedUpdateWithoutRequested_in_requestsInput>
  }

  export type ActiveSwapUpdateOneWithoutSwap_requestNestedInput = {
    create?: XOR<ActiveSwapCreateWithoutSwap_requestInput, ActiveSwapUncheckedCreateWithoutSwap_requestInput>
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutSwap_requestInput
    upsert?: ActiveSwapUpsertWithoutSwap_requestInput
    disconnect?: ActiveSwapWhereInput | boolean
    delete?: ActiveSwapWhereInput | boolean
    connect?: ActiveSwapWhereUniqueInput
    update?: XOR<XOR<ActiveSwapUpdateToOneWithWhereWithoutSwap_requestInput, ActiveSwapUpdateWithoutSwap_requestInput>, ActiveSwapUncheckedUpdateWithoutSwap_requestInput>
  }

  export type ActiveSwapUncheckedUpdateOneWithoutSwap_requestNestedInput = {
    create?: XOR<ActiveSwapCreateWithoutSwap_requestInput, ActiveSwapUncheckedCreateWithoutSwap_requestInput>
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutSwap_requestInput
    upsert?: ActiveSwapUpsertWithoutSwap_requestInput
    disconnect?: ActiveSwapWhereInput | boolean
    delete?: ActiveSwapWhereInput | boolean
    connect?: ActiveSwapWhereUniqueInput
    update?: XOR<XOR<ActiveSwapUpdateToOneWithWhereWithoutSwap_requestInput, ActiveSwapUpdateWithoutSwap_requestInput>, ActiveSwapUncheckedUpdateWithoutSwap_requestInput>
  }

  export type SwapRequestCreateNestedOneWithoutActive_swapInput = {
    create?: XOR<SwapRequestCreateWithoutActive_swapInput, SwapRequestUncheckedCreateWithoutActive_swapInput>
    connectOrCreate?: SwapRequestCreateOrConnectWithoutActive_swapInput
    connect?: SwapRequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutActive_swaps_as_user1Input = {
    create?: XOR<UserCreateWithoutActive_swaps_as_user1Input, UserUncheckedCreateWithoutActive_swaps_as_user1Input>
    connectOrCreate?: UserCreateOrConnectWithoutActive_swaps_as_user1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutActive_swaps_as_user2Input = {
    create?: XOR<UserCreateWithoutActive_swaps_as_user2Input, UserUncheckedCreateWithoutActive_swaps_as_user2Input>
    connectOrCreate?: UserCreateOrConnectWithoutActive_swaps_as_user2Input
    connect?: UserWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutActive_swaps_skill1Input = {
    create?: XOR<SkillCreateWithoutActive_swaps_skill1Input, SkillUncheckedCreateWithoutActive_swaps_skill1Input>
    connectOrCreate?: SkillCreateOrConnectWithoutActive_swaps_skill1Input
    connect?: SkillWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutActive_swaps_skill2Input = {
    create?: XOR<SkillCreateWithoutActive_swaps_skill2Input, SkillUncheckedCreateWithoutActive_swaps_skill2Input>
    connectOrCreate?: SkillCreateOrConnectWithoutActive_swaps_skill2Input
    connect?: SkillWhereUniqueInput
  }

  export type SwapCompletionCreateNestedManyWithoutActive_swapInput = {
    create?: XOR<SwapCompletionCreateWithoutActive_swapInput, SwapCompletionUncheckedCreateWithoutActive_swapInput> | SwapCompletionCreateWithoutActive_swapInput[] | SwapCompletionUncheckedCreateWithoutActive_swapInput[]
    connectOrCreate?: SwapCompletionCreateOrConnectWithoutActive_swapInput | SwapCompletionCreateOrConnectWithoutActive_swapInput[]
    createMany?: SwapCompletionCreateManyActive_swapInputEnvelope
    connect?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
  }

  export type SwapCompletionUncheckedCreateNestedManyWithoutActive_swapInput = {
    create?: XOR<SwapCompletionCreateWithoutActive_swapInput, SwapCompletionUncheckedCreateWithoutActive_swapInput> | SwapCompletionCreateWithoutActive_swapInput[] | SwapCompletionUncheckedCreateWithoutActive_swapInput[]
    connectOrCreate?: SwapCompletionCreateOrConnectWithoutActive_swapInput | SwapCompletionCreateOrConnectWithoutActive_swapInput[]
    createMany?: SwapCompletionCreateManyActive_swapInputEnvelope
    connect?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
  }

  export type EnumActiveSwapStatusFieldUpdateOperationsInput = {
    set?: $Enums.ActiveSwapStatus
  }

  export type SwapRequestUpdateOneRequiredWithoutActive_swapNestedInput = {
    create?: XOR<SwapRequestCreateWithoutActive_swapInput, SwapRequestUncheckedCreateWithoutActive_swapInput>
    connectOrCreate?: SwapRequestCreateOrConnectWithoutActive_swapInput
    upsert?: SwapRequestUpsertWithoutActive_swapInput
    connect?: SwapRequestWhereUniqueInput
    update?: XOR<XOR<SwapRequestUpdateToOneWithWhereWithoutActive_swapInput, SwapRequestUpdateWithoutActive_swapInput>, SwapRequestUncheckedUpdateWithoutActive_swapInput>
  }

  export type UserUpdateOneRequiredWithoutActive_swaps_as_user1NestedInput = {
    create?: XOR<UserCreateWithoutActive_swaps_as_user1Input, UserUncheckedCreateWithoutActive_swaps_as_user1Input>
    connectOrCreate?: UserCreateOrConnectWithoutActive_swaps_as_user1Input
    upsert?: UserUpsertWithoutActive_swaps_as_user1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActive_swaps_as_user1Input, UserUpdateWithoutActive_swaps_as_user1Input>, UserUncheckedUpdateWithoutActive_swaps_as_user1Input>
  }

  export type UserUpdateOneRequiredWithoutActive_swaps_as_user2NestedInput = {
    create?: XOR<UserCreateWithoutActive_swaps_as_user2Input, UserUncheckedCreateWithoutActive_swaps_as_user2Input>
    connectOrCreate?: UserCreateOrConnectWithoutActive_swaps_as_user2Input
    upsert?: UserUpsertWithoutActive_swaps_as_user2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActive_swaps_as_user2Input, UserUpdateWithoutActive_swaps_as_user2Input>, UserUncheckedUpdateWithoutActive_swaps_as_user2Input>
  }

  export type SkillUpdateOneRequiredWithoutActive_swaps_skill1NestedInput = {
    create?: XOR<SkillCreateWithoutActive_swaps_skill1Input, SkillUncheckedCreateWithoutActive_swaps_skill1Input>
    connectOrCreate?: SkillCreateOrConnectWithoutActive_swaps_skill1Input
    upsert?: SkillUpsertWithoutActive_swaps_skill1Input
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutActive_swaps_skill1Input, SkillUpdateWithoutActive_swaps_skill1Input>, SkillUncheckedUpdateWithoutActive_swaps_skill1Input>
  }

  export type SkillUpdateOneRequiredWithoutActive_swaps_skill2NestedInput = {
    create?: XOR<SkillCreateWithoutActive_swaps_skill2Input, SkillUncheckedCreateWithoutActive_swaps_skill2Input>
    connectOrCreate?: SkillCreateOrConnectWithoutActive_swaps_skill2Input
    upsert?: SkillUpsertWithoutActive_swaps_skill2Input
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutActive_swaps_skill2Input, SkillUpdateWithoutActive_swaps_skill2Input>, SkillUncheckedUpdateWithoutActive_swaps_skill2Input>
  }

  export type SwapCompletionUpdateManyWithoutActive_swapNestedInput = {
    create?: XOR<SwapCompletionCreateWithoutActive_swapInput, SwapCompletionUncheckedCreateWithoutActive_swapInput> | SwapCompletionCreateWithoutActive_swapInput[] | SwapCompletionUncheckedCreateWithoutActive_swapInput[]
    connectOrCreate?: SwapCompletionCreateOrConnectWithoutActive_swapInput | SwapCompletionCreateOrConnectWithoutActive_swapInput[]
    upsert?: SwapCompletionUpsertWithWhereUniqueWithoutActive_swapInput | SwapCompletionUpsertWithWhereUniqueWithoutActive_swapInput[]
    createMany?: SwapCompletionCreateManyActive_swapInputEnvelope
    set?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
    disconnect?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
    delete?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
    connect?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
    update?: SwapCompletionUpdateWithWhereUniqueWithoutActive_swapInput | SwapCompletionUpdateWithWhereUniqueWithoutActive_swapInput[]
    updateMany?: SwapCompletionUpdateManyWithWhereWithoutActive_swapInput | SwapCompletionUpdateManyWithWhereWithoutActive_swapInput[]
    deleteMany?: SwapCompletionScalarWhereInput | SwapCompletionScalarWhereInput[]
  }

  export type SwapCompletionUncheckedUpdateManyWithoutActive_swapNestedInput = {
    create?: XOR<SwapCompletionCreateWithoutActive_swapInput, SwapCompletionUncheckedCreateWithoutActive_swapInput> | SwapCompletionCreateWithoutActive_swapInput[] | SwapCompletionUncheckedCreateWithoutActive_swapInput[]
    connectOrCreate?: SwapCompletionCreateOrConnectWithoutActive_swapInput | SwapCompletionCreateOrConnectWithoutActive_swapInput[]
    upsert?: SwapCompletionUpsertWithWhereUniqueWithoutActive_swapInput | SwapCompletionUpsertWithWhereUniqueWithoutActive_swapInput[]
    createMany?: SwapCompletionCreateManyActive_swapInputEnvelope
    set?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
    disconnect?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
    delete?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
    connect?: SwapCompletionWhereUniqueInput | SwapCompletionWhereUniqueInput[]
    update?: SwapCompletionUpdateWithWhereUniqueWithoutActive_swapInput | SwapCompletionUpdateWithWhereUniqueWithoutActive_swapInput[]
    updateMany?: SwapCompletionUpdateManyWithWhereWithoutActive_swapInput | SwapCompletionUpdateManyWithWhereWithoutActive_swapInput[]
    deleteMany?: SwapCompletionScalarWhereInput | SwapCompletionScalarWhereInput[]
  }

  export type ActiveSwapCreateNestedOneWithoutCompletionsInput = {
    create?: XOR<ActiveSwapCreateWithoutCompletionsInput, ActiveSwapUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutCompletionsInput
    connect?: ActiveSwapWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSwap_completionsInput = {
    create?: XOR<UserCreateWithoutSwap_completionsInput, UserUncheckedCreateWithoutSwap_completionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwap_completionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ActiveSwapUpdateOneRequiredWithoutCompletionsNestedInput = {
    create?: XOR<ActiveSwapCreateWithoutCompletionsInput, ActiveSwapUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: ActiveSwapCreateOrConnectWithoutCompletionsInput
    upsert?: ActiveSwapUpsertWithoutCompletionsInput
    connect?: ActiveSwapWhereUniqueInput
    update?: XOR<XOR<ActiveSwapUpdateToOneWithWhereWithoutCompletionsInput, ActiveSwapUpdateWithoutCompletionsInput>, ActiveSwapUncheckedUpdateWithoutCompletionsInput>
  }

  export type UserUpdateOneRequiredWithoutSwap_completionsNestedInput = {
    create?: XOR<UserCreateWithoutSwap_completionsInput, UserUncheckedCreateWithoutSwap_completionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwap_completionsInput
    upsert?: UserUpsertWithoutSwap_completionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSwap_completionsInput, UserUpdateWithoutSwap_completionsInput>, UserUncheckedUpdateWithoutSwap_completionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level
  }

  export type NestedEnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLevelFilter<$PrismaModel>
    _max?: NestedEnumLevelFilter<$PrismaModel>
  }

  export type NestedEnumSwapStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SwapStatus | EnumSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SwapStatus[] | ListEnumSwapStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwapStatus[] | ListEnumSwapStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSwapStatusFilter<$PrismaModel> | $Enums.SwapStatus
  }

  export type NestedEnumSwapStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwapStatus | EnumSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SwapStatus[] | ListEnumSwapStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwapStatus[] | ListEnumSwapStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSwapStatusWithAggregatesFilter<$PrismaModel> | $Enums.SwapStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwapStatusFilter<$PrismaModel>
    _max?: NestedEnumSwapStatusFilter<$PrismaModel>
  }

  export type NestedEnumActiveSwapStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ActiveSwapStatus | EnumActiveSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ActiveSwapStatus[] | ListEnumActiveSwapStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActiveSwapStatus[] | ListEnumActiveSwapStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumActiveSwapStatusFilter<$PrismaModel> | $Enums.ActiveSwapStatus
  }

  export type NestedEnumActiveSwapStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActiveSwapStatus | EnumActiveSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ActiveSwapStatus[] | ListEnumActiveSwapStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActiveSwapStatus[] | ListEnumActiveSwapStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumActiveSwapStatusWithAggregatesFilter<$PrismaModel> | $Enums.ActiveSwapStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActiveSwapStatusFilter<$PrismaModel>
    _max?: NestedEnumActiveSwapStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type SkillCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    level: $Enums.Level
    achievement?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    category: SkillCategoryCreateNestedOneWithoutSkillsInput
    offered_in_requests?: SwapRequestCreateNestedManyWithoutOffered_skillInput
    requested_in_requests?: SwapRequestCreateNestedManyWithoutRequested_skillInput
    active_swaps_skill1?: ActiveSwapCreateNestedManyWithoutSkill1Input
    active_swaps_skill2?: ActiveSwapCreateNestedManyWithoutSkill2Input
  }

  export type SkillUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    level: $Enums.Level
    achievement?: string | null
    category_id: string
    created_at?: Date | string
    updated_at?: Date | string
    offered_in_requests?: SwapRequestUncheckedCreateNestedManyWithoutOffered_skillInput
    requested_in_requests?: SwapRequestUncheckedCreateNestedManyWithoutRequested_skillInput
    active_swaps_skill1?: ActiveSwapUncheckedCreateNestedManyWithoutSkill1Input
    active_swaps_skill2?: ActiveSwapUncheckedCreateNestedManyWithoutSkill2Input
  }

  export type SkillCreateOrConnectWithoutUserInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput>
  }

  export type SkillCreateManyUserInputEnvelope = {
    data: SkillCreateManyUserInput | SkillCreateManyUserInput[]
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    timestamp?: Date | string
    read?: boolean
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    receiver_id: string
    timestamp?: Date | string
    read?: boolean
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
  }

  export type MessageCreateWithoutReceiverInput = {
    id?: string
    content: string
    timestamp?: Date | string
    read?: boolean
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: string
    content: string
    sender_id: string
    timestamp?: Date | string
    read?: boolean
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
  }

  export type SwapRequestCreateWithoutSenderInput = {
    id?: string
    message?: string | null
    status?: $Enums.SwapStatus
    rejection_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    receiver: UserCreateNestedOneWithoutReceived_swap_requestsInput
    offered_skill: SkillCreateNestedOneWithoutOffered_in_requestsInput
    requested_skill: SkillCreateNestedOneWithoutRequested_in_requestsInput
    active_swap?: ActiveSwapCreateNestedOneWithoutSwap_requestInput
  }

  export type SwapRequestUncheckedCreateWithoutSenderInput = {
    id?: string
    receiver_id: string
    offered_skill_id: string
    requested_skill_id: string
    message?: string | null
    status?: $Enums.SwapStatus
    rejection_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    active_swap?: ActiveSwapUncheckedCreateNestedOneWithoutSwap_requestInput
  }

  export type SwapRequestCreateOrConnectWithoutSenderInput = {
    where: SwapRequestWhereUniqueInput
    create: XOR<SwapRequestCreateWithoutSenderInput, SwapRequestUncheckedCreateWithoutSenderInput>
  }

  export type SwapRequestCreateManySenderInputEnvelope = {
    data: SwapRequestCreateManySenderInput | SwapRequestCreateManySenderInput[]
  }

  export type SwapRequestCreateWithoutReceiverInput = {
    id?: string
    message?: string | null
    status?: $Enums.SwapStatus
    rejection_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    sender: UserCreateNestedOneWithoutSent_swap_requestsInput
    offered_skill: SkillCreateNestedOneWithoutOffered_in_requestsInput
    requested_skill: SkillCreateNestedOneWithoutRequested_in_requestsInput
    active_swap?: ActiveSwapCreateNestedOneWithoutSwap_requestInput
  }

  export type SwapRequestUncheckedCreateWithoutReceiverInput = {
    id?: string
    sender_id: string
    offered_skill_id: string
    requested_skill_id: string
    message?: string | null
    status?: $Enums.SwapStatus
    rejection_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    active_swap?: ActiveSwapUncheckedCreateNestedOneWithoutSwap_requestInput
  }

  export type SwapRequestCreateOrConnectWithoutReceiverInput = {
    where: SwapRequestWhereUniqueInput
    create: XOR<SwapRequestCreateWithoutReceiverInput, SwapRequestUncheckedCreateWithoutReceiverInput>
  }

  export type SwapRequestCreateManyReceiverInputEnvelope = {
    data: SwapRequestCreateManyReceiverInput | SwapRequestCreateManyReceiverInput[]
  }

  export type ActiveSwapCreateWithoutUser1Input = {
    id?: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
    swap_request: SwapRequestCreateNestedOneWithoutActive_swapInput
    user2: UserCreateNestedOneWithoutActive_swaps_as_user2Input
    skill1: SkillCreateNestedOneWithoutActive_swaps_skill1Input
    skill2: SkillCreateNestedOneWithoutActive_swaps_skill2Input
    completions?: SwapCompletionCreateNestedManyWithoutActive_swapInput
  }

  export type ActiveSwapUncheckedCreateWithoutUser1Input = {
    id?: string
    swap_request_id: string
    user2_id: string
    skill1_id: string
    skill2_id: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
    completions?: SwapCompletionUncheckedCreateNestedManyWithoutActive_swapInput
  }

  export type ActiveSwapCreateOrConnectWithoutUser1Input = {
    where: ActiveSwapWhereUniqueInput
    create: XOR<ActiveSwapCreateWithoutUser1Input, ActiveSwapUncheckedCreateWithoutUser1Input>
  }

  export type ActiveSwapCreateManyUser1InputEnvelope = {
    data: ActiveSwapCreateManyUser1Input | ActiveSwapCreateManyUser1Input[]
  }

  export type ActiveSwapCreateWithoutUser2Input = {
    id?: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
    swap_request: SwapRequestCreateNestedOneWithoutActive_swapInput
    user1: UserCreateNestedOneWithoutActive_swaps_as_user1Input
    skill1: SkillCreateNestedOneWithoutActive_swaps_skill1Input
    skill2: SkillCreateNestedOneWithoutActive_swaps_skill2Input
    completions?: SwapCompletionCreateNestedManyWithoutActive_swapInput
  }

  export type ActiveSwapUncheckedCreateWithoutUser2Input = {
    id?: string
    swap_request_id: string
    user1_id: string
    skill1_id: string
    skill2_id: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
    completions?: SwapCompletionUncheckedCreateNestedManyWithoutActive_swapInput
  }

  export type ActiveSwapCreateOrConnectWithoutUser2Input = {
    where: ActiveSwapWhereUniqueInput
    create: XOR<ActiveSwapCreateWithoutUser2Input, ActiveSwapUncheckedCreateWithoutUser2Input>
  }

  export type ActiveSwapCreateManyUser2InputEnvelope = {
    data: ActiveSwapCreateManyUser2Input | ActiveSwapCreateManyUser2Input[]
  }

  export type SwapCompletionCreateWithoutUserInput = {
    id?: string
    rating?: number | null
    feedback?: string | null
    created_at?: Date | string
    active_swap: ActiveSwapCreateNestedOneWithoutCompletionsInput
  }

  export type SwapCompletionUncheckedCreateWithoutUserInput = {
    id?: string
    active_swap_id: string
    rating?: number | null
    feedback?: string | null
    created_at?: Date | string
  }

  export type SwapCompletionCreateOrConnectWithoutUserInput = {
    where: SwapCompletionWhereUniqueInput
    create: XOR<SwapCompletionCreateWithoutUserInput, SwapCompletionUncheckedCreateWithoutUserInput>
  }

  export type SwapCompletionCreateManyUserInputEnvelope = {
    data: SwapCompletionCreateManyUserInput | SwapCompletionCreateManyUserInput[]
  }

  export type SkillUpsertWithWhereUniqueWithoutUserInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutUserInput, SkillUncheckedUpdateWithoutUserInput>
    create: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutUserInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutUserInput, SkillUncheckedUpdateWithoutUserInput>
  }

  export type SkillUpdateManyWithWhereWithoutUserInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutUserInput>
  }

  export type SkillScalarWhereInput = {
    AND?: SkillScalarWhereInput | SkillScalarWhereInput[]
    OR?: SkillScalarWhereInput[]
    NOT?: SkillScalarWhereInput | SkillScalarWhereInput[]
    id?: StringFilter<"Skill"> | string
    title?: StringFilter<"Skill"> | string
    description?: StringNullableFilter<"Skill"> | string | null
    level?: EnumLevelFilter<"Skill"> | $Enums.Level
    achievement?: StringNullableFilter<"Skill"> | string | null
    user_id?: StringNullableFilter<"Skill"> | string | null
    category_id?: StringFilter<"Skill"> | string
    created_at?: DateTimeFilter<"Skill"> | Date | string
    updated_at?: DateTimeFilter<"Skill"> | Date | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    user_id?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    sender_id?: StringFilter<"Message"> | string
    receiver_id?: StringFilter<"Message"> | string
    timestamp?: DateTimeFilter<"Message"> | Date | string
    read?: BoolFilter<"Message"> | boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type SwapRequestUpsertWithWhereUniqueWithoutSenderInput = {
    where: SwapRequestWhereUniqueInput
    update: XOR<SwapRequestUpdateWithoutSenderInput, SwapRequestUncheckedUpdateWithoutSenderInput>
    create: XOR<SwapRequestCreateWithoutSenderInput, SwapRequestUncheckedCreateWithoutSenderInput>
  }

  export type SwapRequestUpdateWithWhereUniqueWithoutSenderInput = {
    where: SwapRequestWhereUniqueInput
    data: XOR<SwapRequestUpdateWithoutSenderInput, SwapRequestUncheckedUpdateWithoutSenderInput>
  }

  export type SwapRequestUpdateManyWithWhereWithoutSenderInput = {
    where: SwapRequestScalarWhereInput
    data: XOR<SwapRequestUpdateManyMutationInput, SwapRequestUncheckedUpdateManyWithoutSenderInput>
  }

  export type SwapRequestScalarWhereInput = {
    AND?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
    OR?: SwapRequestScalarWhereInput[]
    NOT?: SwapRequestScalarWhereInput | SwapRequestScalarWhereInput[]
    id?: StringFilter<"SwapRequest"> | string
    sender_id?: StringFilter<"SwapRequest"> | string
    receiver_id?: StringFilter<"SwapRequest"> | string
    offered_skill_id?: StringFilter<"SwapRequest"> | string
    requested_skill_id?: StringFilter<"SwapRequest"> | string
    message?: StringNullableFilter<"SwapRequest"> | string | null
    status?: EnumSwapStatusFilter<"SwapRequest"> | $Enums.SwapStatus
    rejection_reason?: StringNullableFilter<"SwapRequest"> | string | null
    created_at?: DateTimeFilter<"SwapRequest"> | Date | string
    updated_at?: DateTimeFilter<"SwapRequest"> | Date | string
  }

  export type SwapRequestUpsertWithWhereUniqueWithoutReceiverInput = {
    where: SwapRequestWhereUniqueInput
    update: XOR<SwapRequestUpdateWithoutReceiverInput, SwapRequestUncheckedUpdateWithoutReceiverInput>
    create: XOR<SwapRequestCreateWithoutReceiverInput, SwapRequestUncheckedCreateWithoutReceiverInput>
  }

  export type SwapRequestUpdateWithWhereUniqueWithoutReceiverInput = {
    where: SwapRequestWhereUniqueInput
    data: XOR<SwapRequestUpdateWithoutReceiverInput, SwapRequestUncheckedUpdateWithoutReceiverInput>
  }

  export type SwapRequestUpdateManyWithWhereWithoutReceiverInput = {
    where: SwapRequestScalarWhereInput
    data: XOR<SwapRequestUpdateManyMutationInput, SwapRequestUncheckedUpdateManyWithoutReceiverInput>
  }

  export type ActiveSwapUpsertWithWhereUniqueWithoutUser1Input = {
    where: ActiveSwapWhereUniqueInput
    update: XOR<ActiveSwapUpdateWithoutUser1Input, ActiveSwapUncheckedUpdateWithoutUser1Input>
    create: XOR<ActiveSwapCreateWithoutUser1Input, ActiveSwapUncheckedCreateWithoutUser1Input>
  }

  export type ActiveSwapUpdateWithWhereUniqueWithoutUser1Input = {
    where: ActiveSwapWhereUniqueInput
    data: XOR<ActiveSwapUpdateWithoutUser1Input, ActiveSwapUncheckedUpdateWithoutUser1Input>
  }

  export type ActiveSwapUpdateManyWithWhereWithoutUser1Input = {
    where: ActiveSwapScalarWhereInput
    data: XOR<ActiveSwapUpdateManyMutationInput, ActiveSwapUncheckedUpdateManyWithoutUser1Input>
  }

  export type ActiveSwapScalarWhereInput = {
    AND?: ActiveSwapScalarWhereInput | ActiveSwapScalarWhereInput[]
    OR?: ActiveSwapScalarWhereInput[]
    NOT?: ActiveSwapScalarWhereInput | ActiveSwapScalarWhereInput[]
    id?: StringFilter<"ActiveSwap"> | string
    swap_request_id?: StringFilter<"ActiveSwap"> | string
    user1_id?: StringFilter<"ActiveSwap"> | string
    user2_id?: StringFilter<"ActiveSwap"> | string
    skill1_id?: StringFilter<"ActiveSwap"> | string
    skill2_id?: StringFilter<"ActiveSwap"> | string
    status?: EnumActiveSwapStatusFilter<"ActiveSwap"> | $Enums.ActiveSwapStatus
    created_at?: DateTimeFilter<"ActiveSwap"> | Date | string
    completed_at?: DateTimeNullableFilter<"ActiveSwap"> | Date | string | null
  }

  export type ActiveSwapUpsertWithWhereUniqueWithoutUser2Input = {
    where: ActiveSwapWhereUniqueInput
    update: XOR<ActiveSwapUpdateWithoutUser2Input, ActiveSwapUncheckedUpdateWithoutUser2Input>
    create: XOR<ActiveSwapCreateWithoutUser2Input, ActiveSwapUncheckedCreateWithoutUser2Input>
  }

  export type ActiveSwapUpdateWithWhereUniqueWithoutUser2Input = {
    where: ActiveSwapWhereUniqueInput
    data: XOR<ActiveSwapUpdateWithoutUser2Input, ActiveSwapUncheckedUpdateWithoutUser2Input>
  }

  export type ActiveSwapUpdateManyWithWhereWithoutUser2Input = {
    where: ActiveSwapScalarWhereInput
    data: XOR<ActiveSwapUpdateManyMutationInput, ActiveSwapUncheckedUpdateManyWithoutUser2Input>
  }

  export type SwapCompletionUpsertWithWhereUniqueWithoutUserInput = {
    where: SwapCompletionWhereUniqueInput
    update: XOR<SwapCompletionUpdateWithoutUserInput, SwapCompletionUncheckedUpdateWithoutUserInput>
    create: XOR<SwapCompletionCreateWithoutUserInput, SwapCompletionUncheckedCreateWithoutUserInput>
  }

  export type SwapCompletionUpdateWithWhereUniqueWithoutUserInput = {
    where: SwapCompletionWhereUniqueInput
    data: XOR<SwapCompletionUpdateWithoutUserInput, SwapCompletionUncheckedUpdateWithoutUserInput>
  }

  export type SwapCompletionUpdateManyWithWhereWithoutUserInput = {
    where: SwapCompletionScalarWhereInput
    data: XOR<SwapCompletionUpdateManyMutationInput, SwapCompletionUncheckedUpdateManyWithoutUserInput>
  }

  export type SwapCompletionScalarWhereInput = {
    AND?: SwapCompletionScalarWhereInput | SwapCompletionScalarWhereInput[]
    OR?: SwapCompletionScalarWhereInput[]
    NOT?: SwapCompletionScalarWhereInput | SwapCompletionScalarWhereInput[]
    id?: StringFilter<"SwapCompletion"> | string
    active_swap_id?: StringFilter<"SwapCompletion"> | string
    completed_by?: StringFilter<"SwapCompletion"> | string
    rating?: IntNullableFilter<"SwapCompletion"> | number | null
    feedback?: StringNullableFilter<"SwapCompletion"> | string | null
    created_at?: DateTimeFilter<"SwapCompletion"> | Date | string
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sent_swap_requests?: SwapRequestCreateNestedManyWithoutSenderInput
    received_swap_requests?: SwapRequestCreateNestedManyWithoutReceiverInput
    active_swaps_as_user1?: ActiveSwapCreateNestedManyWithoutUser1Input
    active_swaps_as_user2?: ActiveSwapCreateNestedManyWithoutUser2Input
    swap_completions?: SwapCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sent_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutSenderInput
    received_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutReceiverInput
    active_swaps_as_user1?: ActiveSwapUncheckedCreateNestedManyWithoutUser1Input
    active_swaps_as_user2?: ActiveSwapUncheckedCreateNestedManyWithoutUser2Input
    swap_completions?: SwapCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    sent_swap_requests?: SwapRequestCreateNestedManyWithoutSenderInput
    received_swap_requests?: SwapRequestCreateNestedManyWithoutReceiverInput
    active_swaps_as_user1?: ActiveSwapCreateNestedManyWithoutUser1Input
    active_swaps_as_user2?: ActiveSwapCreateNestedManyWithoutUser2Input
    swap_completions?: SwapCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sent_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutSenderInput
    received_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutReceiverInput
    active_swaps_as_user1?: ActiveSwapUncheckedCreateNestedManyWithoutUser1Input
    active_swaps_as_user2?: ActiveSwapUncheckedCreateNestedManyWithoutUser2Input
    swap_completions?: SwapCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sent_swap_requests?: SwapRequestUpdateManyWithoutSenderNestedInput
    received_swap_requests?: SwapRequestUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user1?: ActiveSwapUpdateManyWithoutUser1NestedInput
    active_swaps_as_user2?: ActiveSwapUpdateManyWithoutUser2NestedInput
    swap_completions?: SwapCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sent_swap_requests?: SwapRequestUncheckedUpdateManyWithoutSenderNestedInput
    received_swap_requests?: SwapRequestUncheckedUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user1?: ActiveSwapUncheckedUpdateManyWithoutUser1NestedInput
    active_swaps_as_user2?: ActiveSwapUncheckedUpdateManyWithoutUser2NestedInput
    swap_completions?: SwapCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    sent_swap_requests?: SwapRequestUpdateManyWithoutSenderNestedInput
    received_swap_requests?: SwapRequestUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user1?: ActiveSwapUpdateManyWithoutUser1NestedInput
    active_swaps_as_user2?: ActiveSwapUpdateManyWithoutUser2NestedInput
    swap_completions?: SwapCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sent_swap_requests?: SwapRequestUncheckedUpdateManyWithoutSenderNestedInput
    received_swap_requests?: SwapRequestUncheckedUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user1?: ActiveSwapUncheckedUpdateManyWithoutUser1NestedInput
    active_swaps_as_user2?: ActiveSwapUncheckedUpdateManyWithoutUser2NestedInput
    swap_completions?: SwapCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sent_swap_requests?: SwapRequestCreateNestedManyWithoutSenderInput
    received_swap_requests?: SwapRequestCreateNestedManyWithoutReceiverInput
    active_swaps_as_user1?: ActiveSwapCreateNestedManyWithoutUser1Input
    active_swaps_as_user2?: ActiveSwapCreateNestedManyWithoutUser2Input
    swap_completions?: SwapCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sent_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutSenderInput
    received_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutReceiverInput
    active_swaps_as_user1?: ActiveSwapUncheckedCreateNestedManyWithoutUser1Input
    active_swaps_as_user2?: ActiveSwapUncheckedCreateNestedManyWithoutUser2Input
    swap_completions?: SwapCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sent_swap_requests?: SwapRequestUpdateManyWithoutSenderNestedInput
    received_swap_requests?: SwapRequestUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user1?: ActiveSwapUpdateManyWithoutUser1NestedInput
    active_swaps_as_user2?: ActiveSwapUpdateManyWithoutUser2NestedInput
    swap_completions?: SwapCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sent_swap_requests?: SwapRequestUncheckedUpdateManyWithoutSenderNestedInput
    received_swap_requests?: SwapRequestUncheckedUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user1?: ActiveSwapUncheckedUpdateManyWithoutUser1NestedInput
    active_swaps_as_user2?: ActiveSwapUncheckedUpdateManyWithoutUser2NestedInput
    swap_completions?: SwapCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSkillsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sent_swap_requests?: SwapRequestCreateNestedManyWithoutSenderInput
    received_swap_requests?: SwapRequestCreateNestedManyWithoutReceiverInput
    active_swaps_as_user1?: ActiveSwapCreateNestedManyWithoutUser1Input
    active_swaps_as_user2?: ActiveSwapCreateNestedManyWithoutUser2Input
    swap_completions?: SwapCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSkillsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sent_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutSenderInput
    received_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutReceiverInput
    active_swaps_as_user1?: ActiveSwapUncheckedCreateNestedManyWithoutUser1Input
    active_swaps_as_user2?: ActiveSwapUncheckedCreateNestedManyWithoutUser2Input
    swap_completions?: SwapCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSkillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
  }

  export type SkillCategoryCreateWithoutSkillsInput = {
    id?: string
    name: string
  }

  export type SkillCategoryUncheckedCreateWithoutSkillsInput = {
    id?: string
    name: string
  }

  export type SkillCategoryCreateOrConnectWithoutSkillsInput = {
    where: SkillCategoryWhereUniqueInput
    create: XOR<SkillCategoryCreateWithoutSkillsInput, SkillCategoryUncheckedCreateWithoutSkillsInput>
  }

  export type SwapRequestCreateWithoutOffered_skillInput = {
    id?: string
    message?: string | null
    status?: $Enums.SwapStatus
    rejection_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    sender: UserCreateNestedOneWithoutSent_swap_requestsInput
    receiver: UserCreateNestedOneWithoutReceived_swap_requestsInput
    requested_skill: SkillCreateNestedOneWithoutRequested_in_requestsInput
    active_swap?: ActiveSwapCreateNestedOneWithoutSwap_requestInput
  }

  export type SwapRequestUncheckedCreateWithoutOffered_skillInput = {
    id?: string
    sender_id: string
    receiver_id: string
    requested_skill_id: string
    message?: string | null
    status?: $Enums.SwapStatus
    rejection_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    active_swap?: ActiveSwapUncheckedCreateNestedOneWithoutSwap_requestInput
  }

  export type SwapRequestCreateOrConnectWithoutOffered_skillInput = {
    where: SwapRequestWhereUniqueInput
    create: XOR<SwapRequestCreateWithoutOffered_skillInput, SwapRequestUncheckedCreateWithoutOffered_skillInput>
  }

  export type SwapRequestCreateManyOffered_skillInputEnvelope = {
    data: SwapRequestCreateManyOffered_skillInput | SwapRequestCreateManyOffered_skillInput[]
  }

  export type SwapRequestCreateWithoutRequested_skillInput = {
    id?: string
    message?: string | null
    status?: $Enums.SwapStatus
    rejection_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    sender: UserCreateNestedOneWithoutSent_swap_requestsInput
    receiver: UserCreateNestedOneWithoutReceived_swap_requestsInput
    offered_skill: SkillCreateNestedOneWithoutOffered_in_requestsInput
    active_swap?: ActiveSwapCreateNestedOneWithoutSwap_requestInput
  }

  export type SwapRequestUncheckedCreateWithoutRequested_skillInput = {
    id?: string
    sender_id: string
    receiver_id: string
    offered_skill_id: string
    message?: string | null
    status?: $Enums.SwapStatus
    rejection_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    active_swap?: ActiveSwapUncheckedCreateNestedOneWithoutSwap_requestInput
  }

  export type SwapRequestCreateOrConnectWithoutRequested_skillInput = {
    where: SwapRequestWhereUniqueInput
    create: XOR<SwapRequestCreateWithoutRequested_skillInput, SwapRequestUncheckedCreateWithoutRequested_skillInput>
  }

  export type SwapRequestCreateManyRequested_skillInputEnvelope = {
    data: SwapRequestCreateManyRequested_skillInput | SwapRequestCreateManyRequested_skillInput[]
  }

  export type ActiveSwapCreateWithoutSkill1Input = {
    id?: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
    swap_request: SwapRequestCreateNestedOneWithoutActive_swapInput
    user1: UserCreateNestedOneWithoutActive_swaps_as_user1Input
    user2: UserCreateNestedOneWithoutActive_swaps_as_user2Input
    skill2: SkillCreateNestedOneWithoutActive_swaps_skill2Input
    completions?: SwapCompletionCreateNestedManyWithoutActive_swapInput
  }

  export type ActiveSwapUncheckedCreateWithoutSkill1Input = {
    id?: string
    swap_request_id: string
    user1_id: string
    user2_id: string
    skill2_id: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
    completions?: SwapCompletionUncheckedCreateNestedManyWithoutActive_swapInput
  }

  export type ActiveSwapCreateOrConnectWithoutSkill1Input = {
    where: ActiveSwapWhereUniqueInput
    create: XOR<ActiveSwapCreateWithoutSkill1Input, ActiveSwapUncheckedCreateWithoutSkill1Input>
  }

  export type ActiveSwapCreateManySkill1InputEnvelope = {
    data: ActiveSwapCreateManySkill1Input | ActiveSwapCreateManySkill1Input[]
  }

  export type ActiveSwapCreateWithoutSkill2Input = {
    id?: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
    swap_request: SwapRequestCreateNestedOneWithoutActive_swapInput
    user1: UserCreateNestedOneWithoutActive_swaps_as_user1Input
    user2: UserCreateNestedOneWithoutActive_swaps_as_user2Input
    skill1: SkillCreateNestedOneWithoutActive_swaps_skill1Input
    completions?: SwapCompletionCreateNestedManyWithoutActive_swapInput
  }

  export type ActiveSwapUncheckedCreateWithoutSkill2Input = {
    id?: string
    swap_request_id: string
    user1_id: string
    user2_id: string
    skill1_id: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
    completions?: SwapCompletionUncheckedCreateNestedManyWithoutActive_swapInput
  }

  export type ActiveSwapCreateOrConnectWithoutSkill2Input = {
    where: ActiveSwapWhereUniqueInput
    create: XOR<ActiveSwapCreateWithoutSkill2Input, ActiveSwapUncheckedCreateWithoutSkill2Input>
  }

  export type ActiveSwapCreateManySkill2InputEnvelope = {
    data: ActiveSwapCreateManySkill2Input | ActiveSwapCreateManySkill2Input[]
  }

  export type UserUpsertWithoutSkillsInput = {
    update: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type UserUpdateWithoutSkillsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sent_swap_requests?: SwapRequestUpdateManyWithoutSenderNestedInput
    received_swap_requests?: SwapRequestUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user1?: ActiveSwapUpdateManyWithoutUser1NestedInput
    active_swaps_as_user2?: ActiveSwapUpdateManyWithoutUser2NestedInput
    swap_completions?: SwapCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sent_swap_requests?: SwapRequestUncheckedUpdateManyWithoutSenderNestedInput
    received_swap_requests?: SwapRequestUncheckedUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user1?: ActiveSwapUncheckedUpdateManyWithoutUser1NestedInput
    active_swaps_as_user2?: ActiveSwapUncheckedUpdateManyWithoutUser2NestedInput
    swap_completions?: SwapCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SkillCategoryUpsertWithoutSkillsInput = {
    update: XOR<SkillCategoryUpdateWithoutSkillsInput, SkillCategoryUncheckedUpdateWithoutSkillsInput>
    create: XOR<SkillCategoryCreateWithoutSkillsInput, SkillCategoryUncheckedCreateWithoutSkillsInput>
    where?: SkillCategoryWhereInput
  }

  export type SkillCategoryUpdateToOneWithWhereWithoutSkillsInput = {
    where?: SkillCategoryWhereInput
    data: XOR<SkillCategoryUpdateWithoutSkillsInput, SkillCategoryUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillCategoryUpdateWithoutSkillsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillCategoryUncheckedUpdateWithoutSkillsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SwapRequestUpsertWithWhereUniqueWithoutOffered_skillInput = {
    where: SwapRequestWhereUniqueInput
    update: XOR<SwapRequestUpdateWithoutOffered_skillInput, SwapRequestUncheckedUpdateWithoutOffered_skillInput>
    create: XOR<SwapRequestCreateWithoutOffered_skillInput, SwapRequestUncheckedCreateWithoutOffered_skillInput>
  }

  export type SwapRequestUpdateWithWhereUniqueWithoutOffered_skillInput = {
    where: SwapRequestWhereUniqueInput
    data: XOR<SwapRequestUpdateWithoutOffered_skillInput, SwapRequestUncheckedUpdateWithoutOffered_skillInput>
  }

  export type SwapRequestUpdateManyWithWhereWithoutOffered_skillInput = {
    where: SwapRequestScalarWhereInput
    data: XOR<SwapRequestUpdateManyMutationInput, SwapRequestUncheckedUpdateManyWithoutOffered_skillInput>
  }

  export type SwapRequestUpsertWithWhereUniqueWithoutRequested_skillInput = {
    where: SwapRequestWhereUniqueInput
    update: XOR<SwapRequestUpdateWithoutRequested_skillInput, SwapRequestUncheckedUpdateWithoutRequested_skillInput>
    create: XOR<SwapRequestCreateWithoutRequested_skillInput, SwapRequestUncheckedCreateWithoutRequested_skillInput>
  }

  export type SwapRequestUpdateWithWhereUniqueWithoutRequested_skillInput = {
    where: SwapRequestWhereUniqueInput
    data: XOR<SwapRequestUpdateWithoutRequested_skillInput, SwapRequestUncheckedUpdateWithoutRequested_skillInput>
  }

  export type SwapRequestUpdateManyWithWhereWithoutRequested_skillInput = {
    where: SwapRequestScalarWhereInput
    data: XOR<SwapRequestUpdateManyMutationInput, SwapRequestUncheckedUpdateManyWithoutRequested_skillInput>
  }

  export type ActiveSwapUpsertWithWhereUniqueWithoutSkill1Input = {
    where: ActiveSwapWhereUniqueInput
    update: XOR<ActiveSwapUpdateWithoutSkill1Input, ActiveSwapUncheckedUpdateWithoutSkill1Input>
    create: XOR<ActiveSwapCreateWithoutSkill1Input, ActiveSwapUncheckedCreateWithoutSkill1Input>
  }

  export type ActiveSwapUpdateWithWhereUniqueWithoutSkill1Input = {
    where: ActiveSwapWhereUniqueInput
    data: XOR<ActiveSwapUpdateWithoutSkill1Input, ActiveSwapUncheckedUpdateWithoutSkill1Input>
  }

  export type ActiveSwapUpdateManyWithWhereWithoutSkill1Input = {
    where: ActiveSwapScalarWhereInput
    data: XOR<ActiveSwapUpdateManyMutationInput, ActiveSwapUncheckedUpdateManyWithoutSkill1Input>
  }

  export type ActiveSwapUpsertWithWhereUniqueWithoutSkill2Input = {
    where: ActiveSwapWhereUniqueInput
    update: XOR<ActiveSwapUpdateWithoutSkill2Input, ActiveSwapUncheckedUpdateWithoutSkill2Input>
    create: XOR<ActiveSwapCreateWithoutSkill2Input, ActiveSwapUncheckedCreateWithoutSkill2Input>
  }

  export type ActiveSwapUpdateWithWhereUniqueWithoutSkill2Input = {
    where: ActiveSwapWhereUniqueInput
    data: XOR<ActiveSwapUpdateWithoutSkill2Input, ActiveSwapUncheckedUpdateWithoutSkill2Input>
  }

  export type ActiveSwapUpdateManyWithWhereWithoutSkill2Input = {
    where: ActiveSwapScalarWhereInput
    data: XOR<ActiveSwapUpdateManyMutationInput, ActiveSwapUncheckedUpdateManyWithoutSkill2Input>
  }

  export type SkillCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    level: $Enums.Level
    achievement?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutSkillsInput
    offered_in_requests?: SwapRequestCreateNestedManyWithoutOffered_skillInput
    requested_in_requests?: SwapRequestCreateNestedManyWithoutRequested_skillInput
    active_swaps_skill1?: ActiveSwapCreateNestedManyWithoutSkill1Input
    active_swaps_skill2?: ActiveSwapCreateNestedManyWithoutSkill2Input
  }

  export type SkillUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    level: $Enums.Level
    achievement?: string | null
    user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    offered_in_requests?: SwapRequestUncheckedCreateNestedManyWithoutOffered_skillInput
    requested_in_requests?: SwapRequestUncheckedCreateNestedManyWithoutRequested_skillInput
    active_swaps_skill1?: ActiveSwapUncheckedCreateNestedManyWithoutSkill1Input
    active_swaps_skill2?: ActiveSwapUncheckedCreateNestedManyWithoutSkill2Input
  }

  export type SkillCreateOrConnectWithoutCategoryInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput>
  }

  export type SkillCreateManyCategoryInputEnvelope = {
    data: SkillCreateManyCategoryInput | SkillCreateManyCategoryInput[]
  }

  export type SkillUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutCategoryInput, SkillUncheckedUpdateWithoutCategoryInput>
    create: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutCategoryInput, SkillUncheckedUpdateWithoutCategoryInput>
  }

  export type SkillUpdateManyWithWhereWithoutCategoryInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutSent_swap_requestsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    received_swap_requests?: SwapRequestCreateNestedManyWithoutReceiverInput
    active_swaps_as_user1?: ActiveSwapCreateNestedManyWithoutUser1Input
    active_swaps_as_user2?: ActiveSwapCreateNestedManyWithoutUser2Input
    swap_completions?: SwapCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSent_swap_requestsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    received_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutReceiverInput
    active_swaps_as_user1?: ActiveSwapUncheckedCreateNestedManyWithoutUser1Input
    active_swaps_as_user2?: ActiveSwapUncheckedCreateNestedManyWithoutUser2Input
    swap_completions?: SwapCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSent_swap_requestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSent_swap_requestsInput, UserUncheckedCreateWithoutSent_swap_requestsInput>
  }

  export type UserCreateWithoutReceived_swap_requestsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sent_swap_requests?: SwapRequestCreateNestedManyWithoutSenderInput
    active_swaps_as_user1?: ActiveSwapCreateNestedManyWithoutUser1Input
    active_swaps_as_user2?: ActiveSwapCreateNestedManyWithoutUser2Input
    swap_completions?: SwapCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceived_swap_requestsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sent_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutSenderInput
    active_swaps_as_user1?: ActiveSwapUncheckedCreateNestedManyWithoutUser1Input
    active_swaps_as_user2?: ActiveSwapUncheckedCreateNestedManyWithoutUser2Input
    swap_completions?: SwapCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceived_swap_requestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceived_swap_requestsInput, UserUncheckedCreateWithoutReceived_swap_requestsInput>
  }

  export type SkillCreateWithoutOffered_in_requestsInput = {
    id?: string
    title: string
    description?: string | null
    level: $Enums.Level
    achievement?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutSkillsInput
    category: SkillCategoryCreateNestedOneWithoutSkillsInput
    requested_in_requests?: SwapRequestCreateNestedManyWithoutRequested_skillInput
    active_swaps_skill1?: ActiveSwapCreateNestedManyWithoutSkill1Input
    active_swaps_skill2?: ActiveSwapCreateNestedManyWithoutSkill2Input
  }

  export type SkillUncheckedCreateWithoutOffered_in_requestsInput = {
    id?: string
    title: string
    description?: string | null
    level: $Enums.Level
    achievement?: string | null
    user_id?: string | null
    category_id: string
    created_at?: Date | string
    updated_at?: Date | string
    requested_in_requests?: SwapRequestUncheckedCreateNestedManyWithoutRequested_skillInput
    active_swaps_skill1?: ActiveSwapUncheckedCreateNestedManyWithoutSkill1Input
    active_swaps_skill2?: ActiveSwapUncheckedCreateNestedManyWithoutSkill2Input
  }

  export type SkillCreateOrConnectWithoutOffered_in_requestsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutOffered_in_requestsInput, SkillUncheckedCreateWithoutOffered_in_requestsInput>
  }

  export type SkillCreateWithoutRequested_in_requestsInput = {
    id?: string
    title: string
    description?: string | null
    level: $Enums.Level
    achievement?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutSkillsInput
    category: SkillCategoryCreateNestedOneWithoutSkillsInput
    offered_in_requests?: SwapRequestCreateNestedManyWithoutOffered_skillInput
    active_swaps_skill1?: ActiveSwapCreateNestedManyWithoutSkill1Input
    active_swaps_skill2?: ActiveSwapCreateNestedManyWithoutSkill2Input
  }

  export type SkillUncheckedCreateWithoutRequested_in_requestsInput = {
    id?: string
    title: string
    description?: string | null
    level: $Enums.Level
    achievement?: string | null
    user_id?: string | null
    category_id: string
    created_at?: Date | string
    updated_at?: Date | string
    offered_in_requests?: SwapRequestUncheckedCreateNestedManyWithoutOffered_skillInput
    active_swaps_skill1?: ActiveSwapUncheckedCreateNestedManyWithoutSkill1Input
    active_swaps_skill2?: ActiveSwapUncheckedCreateNestedManyWithoutSkill2Input
  }

  export type SkillCreateOrConnectWithoutRequested_in_requestsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutRequested_in_requestsInput, SkillUncheckedCreateWithoutRequested_in_requestsInput>
  }

  export type ActiveSwapCreateWithoutSwap_requestInput = {
    id?: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
    user1: UserCreateNestedOneWithoutActive_swaps_as_user1Input
    user2: UserCreateNestedOneWithoutActive_swaps_as_user2Input
    skill1: SkillCreateNestedOneWithoutActive_swaps_skill1Input
    skill2: SkillCreateNestedOneWithoutActive_swaps_skill2Input
    completions?: SwapCompletionCreateNestedManyWithoutActive_swapInput
  }

  export type ActiveSwapUncheckedCreateWithoutSwap_requestInput = {
    id?: string
    user1_id: string
    user2_id: string
    skill1_id: string
    skill2_id: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
    completions?: SwapCompletionUncheckedCreateNestedManyWithoutActive_swapInput
  }

  export type ActiveSwapCreateOrConnectWithoutSwap_requestInput = {
    where: ActiveSwapWhereUniqueInput
    create: XOR<ActiveSwapCreateWithoutSwap_requestInput, ActiveSwapUncheckedCreateWithoutSwap_requestInput>
  }

  export type UserUpsertWithoutSent_swap_requestsInput = {
    update: XOR<UserUpdateWithoutSent_swap_requestsInput, UserUncheckedUpdateWithoutSent_swap_requestsInput>
    create: XOR<UserCreateWithoutSent_swap_requestsInput, UserUncheckedCreateWithoutSent_swap_requestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSent_swap_requestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSent_swap_requestsInput, UserUncheckedUpdateWithoutSent_swap_requestsInput>
  }

  export type UserUpdateWithoutSent_swap_requestsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    received_swap_requests?: SwapRequestUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user1?: ActiveSwapUpdateManyWithoutUser1NestedInput
    active_swaps_as_user2?: ActiveSwapUpdateManyWithoutUser2NestedInput
    swap_completions?: SwapCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSent_swap_requestsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    received_swap_requests?: SwapRequestUncheckedUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user1?: ActiveSwapUncheckedUpdateManyWithoutUser1NestedInput
    active_swaps_as_user2?: ActiveSwapUncheckedUpdateManyWithoutUser2NestedInput
    swap_completions?: SwapCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceived_swap_requestsInput = {
    update: XOR<UserUpdateWithoutReceived_swap_requestsInput, UserUncheckedUpdateWithoutReceived_swap_requestsInput>
    create: XOR<UserCreateWithoutReceived_swap_requestsInput, UserUncheckedCreateWithoutReceived_swap_requestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceived_swap_requestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceived_swap_requestsInput, UserUncheckedUpdateWithoutReceived_swap_requestsInput>
  }

  export type UserUpdateWithoutReceived_swap_requestsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sent_swap_requests?: SwapRequestUpdateManyWithoutSenderNestedInput
    active_swaps_as_user1?: ActiveSwapUpdateManyWithoutUser1NestedInput
    active_swaps_as_user2?: ActiveSwapUpdateManyWithoutUser2NestedInput
    swap_completions?: SwapCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceived_swap_requestsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sent_swap_requests?: SwapRequestUncheckedUpdateManyWithoutSenderNestedInput
    active_swaps_as_user1?: ActiveSwapUncheckedUpdateManyWithoutUser1NestedInput
    active_swaps_as_user2?: ActiveSwapUncheckedUpdateManyWithoutUser2NestedInput
    swap_completions?: SwapCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SkillUpsertWithoutOffered_in_requestsInput = {
    update: XOR<SkillUpdateWithoutOffered_in_requestsInput, SkillUncheckedUpdateWithoutOffered_in_requestsInput>
    create: XOR<SkillCreateWithoutOffered_in_requestsInput, SkillUncheckedCreateWithoutOffered_in_requestsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutOffered_in_requestsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutOffered_in_requestsInput, SkillUncheckedUpdateWithoutOffered_in_requestsInput>
  }

  export type SkillUpdateWithoutOffered_in_requestsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSkillsNestedInput
    category?: SkillCategoryUpdateOneRequiredWithoutSkillsNestedInput
    requested_in_requests?: SwapRequestUpdateManyWithoutRequested_skillNestedInput
    active_swaps_skill1?: ActiveSwapUpdateManyWithoutSkill1NestedInput
    active_swaps_skill2?: ActiveSwapUpdateManyWithoutSkill2NestedInput
  }

  export type SkillUncheckedUpdateWithoutOffered_in_requestsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    requested_in_requests?: SwapRequestUncheckedUpdateManyWithoutRequested_skillNestedInput
    active_swaps_skill1?: ActiveSwapUncheckedUpdateManyWithoutSkill1NestedInput
    active_swaps_skill2?: ActiveSwapUncheckedUpdateManyWithoutSkill2NestedInput
  }

  export type SkillUpsertWithoutRequested_in_requestsInput = {
    update: XOR<SkillUpdateWithoutRequested_in_requestsInput, SkillUncheckedUpdateWithoutRequested_in_requestsInput>
    create: XOR<SkillCreateWithoutRequested_in_requestsInput, SkillUncheckedCreateWithoutRequested_in_requestsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutRequested_in_requestsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutRequested_in_requestsInput, SkillUncheckedUpdateWithoutRequested_in_requestsInput>
  }

  export type SkillUpdateWithoutRequested_in_requestsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSkillsNestedInput
    category?: SkillCategoryUpdateOneRequiredWithoutSkillsNestedInput
    offered_in_requests?: SwapRequestUpdateManyWithoutOffered_skillNestedInput
    active_swaps_skill1?: ActiveSwapUpdateManyWithoutSkill1NestedInput
    active_swaps_skill2?: ActiveSwapUpdateManyWithoutSkill2NestedInput
  }

  export type SkillUncheckedUpdateWithoutRequested_in_requestsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    offered_in_requests?: SwapRequestUncheckedUpdateManyWithoutOffered_skillNestedInput
    active_swaps_skill1?: ActiveSwapUncheckedUpdateManyWithoutSkill1NestedInput
    active_swaps_skill2?: ActiveSwapUncheckedUpdateManyWithoutSkill2NestedInput
  }

  export type ActiveSwapUpsertWithoutSwap_requestInput = {
    update: XOR<ActiveSwapUpdateWithoutSwap_requestInput, ActiveSwapUncheckedUpdateWithoutSwap_requestInput>
    create: XOR<ActiveSwapCreateWithoutSwap_requestInput, ActiveSwapUncheckedCreateWithoutSwap_requestInput>
    where?: ActiveSwapWhereInput
  }

  export type ActiveSwapUpdateToOneWithWhereWithoutSwap_requestInput = {
    where?: ActiveSwapWhereInput
    data: XOR<ActiveSwapUpdateWithoutSwap_requestInput, ActiveSwapUncheckedUpdateWithoutSwap_requestInput>
  }

  export type ActiveSwapUpdateWithoutSwap_requestInput = {
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1?: UserUpdateOneRequiredWithoutActive_swaps_as_user1NestedInput
    user2?: UserUpdateOneRequiredWithoutActive_swaps_as_user2NestedInput
    skill1?: SkillUpdateOneRequiredWithoutActive_swaps_skill1NestedInput
    skill2?: SkillUpdateOneRequiredWithoutActive_swaps_skill2NestedInput
    completions?: SwapCompletionUpdateManyWithoutActive_swapNestedInput
  }

  export type ActiveSwapUncheckedUpdateWithoutSwap_requestInput = {
    user1_id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    skill1_id?: StringFieldUpdateOperationsInput | string
    skill2_id?: StringFieldUpdateOperationsInput | string
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completions?: SwapCompletionUncheckedUpdateManyWithoutActive_swapNestedInput
  }

  export type SwapRequestCreateWithoutActive_swapInput = {
    id?: string
    message?: string | null
    status?: $Enums.SwapStatus
    rejection_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    sender: UserCreateNestedOneWithoutSent_swap_requestsInput
    receiver: UserCreateNestedOneWithoutReceived_swap_requestsInput
    offered_skill: SkillCreateNestedOneWithoutOffered_in_requestsInput
    requested_skill: SkillCreateNestedOneWithoutRequested_in_requestsInput
  }

  export type SwapRequestUncheckedCreateWithoutActive_swapInput = {
    id?: string
    sender_id: string
    receiver_id: string
    offered_skill_id: string
    requested_skill_id: string
    message?: string | null
    status?: $Enums.SwapStatus
    rejection_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SwapRequestCreateOrConnectWithoutActive_swapInput = {
    where: SwapRequestWhereUniqueInput
    create: XOR<SwapRequestCreateWithoutActive_swapInput, SwapRequestUncheckedCreateWithoutActive_swapInput>
  }

  export type UserCreateWithoutActive_swaps_as_user1Input = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sent_swap_requests?: SwapRequestCreateNestedManyWithoutSenderInput
    received_swap_requests?: SwapRequestCreateNestedManyWithoutReceiverInput
    active_swaps_as_user2?: ActiveSwapCreateNestedManyWithoutUser2Input
    swap_completions?: SwapCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActive_swaps_as_user1Input = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sent_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutSenderInput
    received_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutReceiverInput
    active_swaps_as_user2?: ActiveSwapUncheckedCreateNestedManyWithoutUser2Input
    swap_completions?: SwapCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActive_swaps_as_user1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActive_swaps_as_user1Input, UserUncheckedCreateWithoutActive_swaps_as_user1Input>
  }

  export type UserCreateWithoutActive_swaps_as_user2Input = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sent_swap_requests?: SwapRequestCreateNestedManyWithoutSenderInput
    received_swap_requests?: SwapRequestCreateNestedManyWithoutReceiverInput
    active_swaps_as_user1?: ActiveSwapCreateNestedManyWithoutUser1Input
    swap_completions?: SwapCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActive_swaps_as_user2Input = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sent_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutSenderInput
    received_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutReceiverInput
    active_swaps_as_user1?: ActiveSwapUncheckedCreateNestedManyWithoutUser1Input
    swap_completions?: SwapCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActive_swaps_as_user2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActive_swaps_as_user2Input, UserUncheckedCreateWithoutActive_swaps_as_user2Input>
  }

  export type SkillCreateWithoutActive_swaps_skill1Input = {
    id?: string
    title: string
    description?: string | null
    level: $Enums.Level
    achievement?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutSkillsInput
    category: SkillCategoryCreateNestedOneWithoutSkillsInput
    offered_in_requests?: SwapRequestCreateNestedManyWithoutOffered_skillInput
    requested_in_requests?: SwapRequestCreateNestedManyWithoutRequested_skillInput
    active_swaps_skill2?: ActiveSwapCreateNestedManyWithoutSkill2Input
  }

  export type SkillUncheckedCreateWithoutActive_swaps_skill1Input = {
    id?: string
    title: string
    description?: string | null
    level: $Enums.Level
    achievement?: string | null
    user_id?: string | null
    category_id: string
    created_at?: Date | string
    updated_at?: Date | string
    offered_in_requests?: SwapRequestUncheckedCreateNestedManyWithoutOffered_skillInput
    requested_in_requests?: SwapRequestUncheckedCreateNestedManyWithoutRequested_skillInput
    active_swaps_skill2?: ActiveSwapUncheckedCreateNestedManyWithoutSkill2Input
  }

  export type SkillCreateOrConnectWithoutActive_swaps_skill1Input = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutActive_swaps_skill1Input, SkillUncheckedCreateWithoutActive_swaps_skill1Input>
  }

  export type SkillCreateWithoutActive_swaps_skill2Input = {
    id?: string
    title: string
    description?: string | null
    level: $Enums.Level
    achievement?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutSkillsInput
    category: SkillCategoryCreateNestedOneWithoutSkillsInput
    offered_in_requests?: SwapRequestCreateNestedManyWithoutOffered_skillInput
    requested_in_requests?: SwapRequestCreateNestedManyWithoutRequested_skillInput
    active_swaps_skill1?: ActiveSwapCreateNestedManyWithoutSkill1Input
  }

  export type SkillUncheckedCreateWithoutActive_swaps_skill2Input = {
    id?: string
    title: string
    description?: string | null
    level: $Enums.Level
    achievement?: string | null
    user_id?: string | null
    category_id: string
    created_at?: Date | string
    updated_at?: Date | string
    offered_in_requests?: SwapRequestUncheckedCreateNestedManyWithoutOffered_skillInput
    requested_in_requests?: SwapRequestUncheckedCreateNestedManyWithoutRequested_skillInput
    active_swaps_skill1?: ActiveSwapUncheckedCreateNestedManyWithoutSkill1Input
  }

  export type SkillCreateOrConnectWithoutActive_swaps_skill2Input = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutActive_swaps_skill2Input, SkillUncheckedCreateWithoutActive_swaps_skill2Input>
  }

  export type SwapCompletionCreateWithoutActive_swapInput = {
    id?: string
    rating?: number | null
    feedback?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutSwap_completionsInput
  }

  export type SwapCompletionUncheckedCreateWithoutActive_swapInput = {
    id?: string
    completed_by: string
    rating?: number | null
    feedback?: string | null
    created_at?: Date | string
  }

  export type SwapCompletionCreateOrConnectWithoutActive_swapInput = {
    where: SwapCompletionWhereUniqueInput
    create: XOR<SwapCompletionCreateWithoutActive_swapInput, SwapCompletionUncheckedCreateWithoutActive_swapInput>
  }

  export type SwapCompletionCreateManyActive_swapInputEnvelope = {
    data: SwapCompletionCreateManyActive_swapInput | SwapCompletionCreateManyActive_swapInput[]
  }

  export type SwapRequestUpsertWithoutActive_swapInput = {
    update: XOR<SwapRequestUpdateWithoutActive_swapInput, SwapRequestUncheckedUpdateWithoutActive_swapInput>
    create: XOR<SwapRequestCreateWithoutActive_swapInput, SwapRequestUncheckedCreateWithoutActive_swapInput>
    where?: SwapRequestWhereInput
  }

  export type SwapRequestUpdateToOneWithWhereWithoutActive_swapInput = {
    where?: SwapRequestWhereInput
    data: XOR<SwapRequestUpdateWithoutActive_swapInput, SwapRequestUncheckedUpdateWithoutActive_swapInput>
  }

  export type SwapRequestUpdateWithoutActive_swapInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSent_swap_requestsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceived_swap_requestsNestedInput
    offered_skill?: SkillUpdateOneRequiredWithoutOffered_in_requestsNestedInput
    requested_skill?: SkillUpdateOneRequiredWithoutRequested_in_requestsNestedInput
  }

  export type SwapRequestUncheckedUpdateWithoutActive_swapInput = {
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    offered_skill_id?: StringFieldUpdateOperationsInput | string
    requested_skill_id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutActive_swaps_as_user1Input = {
    update: XOR<UserUpdateWithoutActive_swaps_as_user1Input, UserUncheckedUpdateWithoutActive_swaps_as_user1Input>
    create: XOR<UserCreateWithoutActive_swaps_as_user1Input, UserUncheckedCreateWithoutActive_swaps_as_user1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActive_swaps_as_user1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActive_swaps_as_user1Input, UserUncheckedUpdateWithoutActive_swaps_as_user1Input>
  }

  export type UserUpdateWithoutActive_swaps_as_user1Input = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sent_swap_requests?: SwapRequestUpdateManyWithoutSenderNestedInput
    received_swap_requests?: SwapRequestUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user2?: ActiveSwapUpdateManyWithoutUser2NestedInput
    swap_completions?: SwapCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActive_swaps_as_user1Input = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sent_swap_requests?: SwapRequestUncheckedUpdateManyWithoutSenderNestedInput
    received_swap_requests?: SwapRequestUncheckedUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user2?: ActiveSwapUncheckedUpdateManyWithoutUser2NestedInput
    swap_completions?: SwapCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutActive_swaps_as_user2Input = {
    update: XOR<UserUpdateWithoutActive_swaps_as_user2Input, UserUncheckedUpdateWithoutActive_swaps_as_user2Input>
    create: XOR<UserCreateWithoutActive_swaps_as_user2Input, UserUncheckedCreateWithoutActive_swaps_as_user2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActive_swaps_as_user2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActive_swaps_as_user2Input, UserUncheckedUpdateWithoutActive_swaps_as_user2Input>
  }

  export type UserUpdateWithoutActive_swaps_as_user2Input = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sent_swap_requests?: SwapRequestUpdateManyWithoutSenderNestedInput
    received_swap_requests?: SwapRequestUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user1?: ActiveSwapUpdateManyWithoutUser1NestedInput
    swap_completions?: SwapCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActive_swaps_as_user2Input = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sent_swap_requests?: SwapRequestUncheckedUpdateManyWithoutSenderNestedInput
    received_swap_requests?: SwapRequestUncheckedUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user1?: ActiveSwapUncheckedUpdateManyWithoutUser1NestedInput
    swap_completions?: SwapCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SkillUpsertWithoutActive_swaps_skill1Input = {
    update: XOR<SkillUpdateWithoutActive_swaps_skill1Input, SkillUncheckedUpdateWithoutActive_swaps_skill1Input>
    create: XOR<SkillCreateWithoutActive_swaps_skill1Input, SkillUncheckedCreateWithoutActive_swaps_skill1Input>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutActive_swaps_skill1Input = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutActive_swaps_skill1Input, SkillUncheckedUpdateWithoutActive_swaps_skill1Input>
  }

  export type SkillUpdateWithoutActive_swaps_skill1Input = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSkillsNestedInput
    category?: SkillCategoryUpdateOneRequiredWithoutSkillsNestedInput
    offered_in_requests?: SwapRequestUpdateManyWithoutOffered_skillNestedInput
    requested_in_requests?: SwapRequestUpdateManyWithoutRequested_skillNestedInput
    active_swaps_skill2?: ActiveSwapUpdateManyWithoutSkill2NestedInput
  }

  export type SkillUncheckedUpdateWithoutActive_swaps_skill1Input = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    offered_in_requests?: SwapRequestUncheckedUpdateManyWithoutOffered_skillNestedInput
    requested_in_requests?: SwapRequestUncheckedUpdateManyWithoutRequested_skillNestedInput
    active_swaps_skill2?: ActiveSwapUncheckedUpdateManyWithoutSkill2NestedInput
  }

  export type SkillUpsertWithoutActive_swaps_skill2Input = {
    update: XOR<SkillUpdateWithoutActive_swaps_skill2Input, SkillUncheckedUpdateWithoutActive_swaps_skill2Input>
    create: XOR<SkillCreateWithoutActive_swaps_skill2Input, SkillUncheckedCreateWithoutActive_swaps_skill2Input>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutActive_swaps_skill2Input = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutActive_swaps_skill2Input, SkillUncheckedUpdateWithoutActive_swaps_skill2Input>
  }

  export type SkillUpdateWithoutActive_swaps_skill2Input = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSkillsNestedInput
    category?: SkillCategoryUpdateOneRequiredWithoutSkillsNestedInput
    offered_in_requests?: SwapRequestUpdateManyWithoutOffered_skillNestedInput
    requested_in_requests?: SwapRequestUpdateManyWithoutRequested_skillNestedInput
    active_swaps_skill1?: ActiveSwapUpdateManyWithoutSkill1NestedInput
  }

  export type SkillUncheckedUpdateWithoutActive_swaps_skill2Input = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    offered_in_requests?: SwapRequestUncheckedUpdateManyWithoutOffered_skillNestedInput
    requested_in_requests?: SwapRequestUncheckedUpdateManyWithoutRequested_skillNestedInput
    active_swaps_skill1?: ActiveSwapUncheckedUpdateManyWithoutSkill1NestedInput
  }

  export type SwapCompletionUpsertWithWhereUniqueWithoutActive_swapInput = {
    where: SwapCompletionWhereUniqueInput
    update: XOR<SwapCompletionUpdateWithoutActive_swapInput, SwapCompletionUncheckedUpdateWithoutActive_swapInput>
    create: XOR<SwapCompletionCreateWithoutActive_swapInput, SwapCompletionUncheckedCreateWithoutActive_swapInput>
  }

  export type SwapCompletionUpdateWithWhereUniqueWithoutActive_swapInput = {
    where: SwapCompletionWhereUniqueInput
    data: XOR<SwapCompletionUpdateWithoutActive_swapInput, SwapCompletionUncheckedUpdateWithoutActive_swapInput>
  }

  export type SwapCompletionUpdateManyWithWhereWithoutActive_swapInput = {
    where: SwapCompletionScalarWhereInput
    data: XOR<SwapCompletionUpdateManyMutationInput, SwapCompletionUncheckedUpdateManyWithoutActive_swapInput>
  }

  export type ActiveSwapCreateWithoutCompletionsInput = {
    id?: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
    swap_request: SwapRequestCreateNestedOneWithoutActive_swapInput
    user1: UserCreateNestedOneWithoutActive_swaps_as_user1Input
    user2: UserCreateNestedOneWithoutActive_swaps_as_user2Input
    skill1: SkillCreateNestedOneWithoutActive_swaps_skill1Input
    skill2: SkillCreateNestedOneWithoutActive_swaps_skill2Input
  }

  export type ActiveSwapUncheckedCreateWithoutCompletionsInput = {
    id?: string
    swap_request_id: string
    user1_id: string
    user2_id: string
    skill1_id: string
    skill2_id: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type ActiveSwapCreateOrConnectWithoutCompletionsInput = {
    where: ActiveSwapWhereUniqueInput
    create: XOR<ActiveSwapCreateWithoutCompletionsInput, ActiveSwapUncheckedCreateWithoutCompletionsInput>
  }

  export type UserCreateWithoutSwap_completionsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sent_swap_requests?: SwapRequestCreateNestedManyWithoutSenderInput
    received_swap_requests?: SwapRequestCreateNestedManyWithoutReceiverInput
    active_swaps_as_user1?: ActiveSwapCreateNestedManyWithoutUser1Input
    active_swaps_as_user2?: ActiveSwapCreateNestedManyWithoutUser2Input
  }

  export type UserUncheckedCreateWithoutSwap_completionsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    is_admin?: boolean
    is_super_admin?: boolean
    is_verified?: boolean
    otp?: string | null
    otp_expiry?: Date | string | null
    reset_token?: string | null
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sent_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutSenderInput
    received_swap_requests?: SwapRequestUncheckedCreateNestedManyWithoutReceiverInput
    active_swaps_as_user1?: ActiveSwapUncheckedCreateNestedManyWithoutUser1Input
    active_swaps_as_user2?: ActiveSwapUncheckedCreateNestedManyWithoutUser2Input
  }

  export type UserCreateOrConnectWithoutSwap_completionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSwap_completionsInput, UserUncheckedCreateWithoutSwap_completionsInput>
  }

  export type ActiveSwapUpsertWithoutCompletionsInput = {
    update: XOR<ActiveSwapUpdateWithoutCompletionsInput, ActiveSwapUncheckedUpdateWithoutCompletionsInput>
    create: XOR<ActiveSwapCreateWithoutCompletionsInput, ActiveSwapUncheckedCreateWithoutCompletionsInput>
    where?: ActiveSwapWhereInput
  }

  export type ActiveSwapUpdateToOneWithWhereWithoutCompletionsInput = {
    where?: ActiveSwapWhereInput
    data: XOR<ActiveSwapUpdateWithoutCompletionsInput, ActiveSwapUncheckedUpdateWithoutCompletionsInput>
  }

  export type ActiveSwapUpdateWithoutCompletionsInput = {
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    swap_request?: SwapRequestUpdateOneRequiredWithoutActive_swapNestedInput
    user1?: UserUpdateOneRequiredWithoutActive_swaps_as_user1NestedInput
    user2?: UserUpdateOneRequiredWithoutActive_swaps_as_user2NestedInput
    skill1?: SkillUpdateOneRequiredWithoutActive_swaps_skill1NestedInput
    skill2?: SkillUpdateOneRequiredWithoutActive_swaps_skill2NestedInput
  }

  export type ActiveSwapUncheckedUpdateWithoutCompletionsInput = {
    swap_request_id?: StringFieldUpdateOperationsInput | string
    user1_id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    skill1_id?: StringFieldUpdateOperationsInput | string
    skill2_id?: StringFieldUpdateOperationsInput | string
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutSwap_completionsInput = {
    update: XOR<UserUpdateWithoutSwap_completionsInput, UserUncheckedUpdateWithoutSwap_completionsInput>
    create: XOR<UserCreateWithoutSwap_completionsInput, UserUncheckedCreateWithoutSwap_completionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSwap_completionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSwap_completionsInput, UserUncheckedUpdateWithoutSwap_completionsInput>
  }

  export type UserUpdateWithoutSwap_completionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sent_swap_requests?: SwapRequestUpdateManyWithoutSenderNestedInput
    received_swap_requests?: SwapRequestUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user1?: ActiveSwapUpdateManyWithoutUser1NestedInput
    active_swaps_as_user2?: ActiveSwapUpdateManyWithoutUser2NestedInput
  }

  export type UserUncheckedUpdateWithoutSwap_completionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sent_swap_requests?: SwapRequestUncheckedUpdateManyWithoutSenderNestedInput
    received_swap_requests?: SwapRequestUncheckedUpdateManyWithoutReceiverNestedInput
    active_swaps_as_user1?: ActiveSwapUncheckedUpdateManyWithoutUser1NestedInput
    active_swaps_as_user2?: ActiveSwapUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type SkillCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    level: $Enums.Level
    achievement?: string | null
    category_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    content: string
    receiver_id: string
    timestamp?: Date | string
    read?: boolean
  }

  export type MessageCreateManyReceiverInput = {
    id?: string
    content: string
    sender_id: string
    timestamp?: Date | string
    read?: boolean
  }

  export type SwapRequestCreateManySenderInput = {
    id?: string
    receiver_id: string
    offered_skill_id: string
    requested_skill_id: string
    message?: string | null
    status?: $Enums.SwapStatus
    rejection_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SwapRequestCreateManyReceiverInput = {
    id?: string
    sender_id: string
    offered_skill_id: string
    requested_skill_id: string
    message?: string | null
    status?: $Enums.SwapStatus
    rejection_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ActiveSwapCreateManyUser1Input = {
    id?: string
    swap_request_id: string
    user2_id: string
    skill1_id: string
    skill2_id: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type ActiveSwapCreateManyUser2Input = {
    id?: string
    swap_request_id: string
    user1_id: string
    skill1_id: string
    skill2_id: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type SwapCompletionCreateManyUserInput = {
    id?: string
    active_swap_id: string
    rating?: number | null
    feedback?: string | null
    created_at?: Date | string
  }

  export type SkillUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: SkillCategoryUpdateOneRequiredWithoutSkillsNestedInput
    offered_in_requests?: SwapRequestUpdateManyWithoutOffered_skillNestedInput
    requested_in_requests?: SwapRequestUpdateManyWithoutRequested_skillNestedInput
    active_swaps_skill1?: ActiveSwapUpdateManyWithoutSkill1NestedInput
    active_swaps_skill2?: ActiveSwapUpdateManyWithoutSkill2NestedInput
  }

  export type SkillUncheckedUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    offered_in_requests?: SwapRequestUncheckedUpdateManyWithoutOffered_skillNestedInput
    requested_in_requests?: SwapRequestUncheckedUpdateManyWithoutRequested_skillNestedInput
    active_swaps_skill1?: ActiveSwapUncheckedUpdateManyWithoutSkill1NestedInput
    active_swaps_skill2?: ActiveSwapUncheckedUpdateManyWithoutSkill2NestedInput
  }

  export type SkillUncheckedUpdateManyWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUpdateWithoutReceiverInput = {
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    content?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    content?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SwapRequestUpdateWithoutSenderInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceived_swap_requestsNestedInput
    offered_skill?: SkillUpdateOneRequiredWithoutOffered_in_requestsNestedInput
    requested_skill?: SkillUpdateOneRequiredWithoutRequested_in_requestsNestedInput
    active_swap?: ActiveSwapUpdateOneWithoutSwap_requestNestedInput
  }

  export type SwapRequestUncheckedUpdateWithoutSenderInput = {
    receiver_id?: StringFieldUpdateOperationsInput | string
    offered_skill_id?: StringFieldUpdateOperationsInput | string
    requested_skill_id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active_swap?: ActiveSwapUncheckedUpdateOneWithoutSwap_requestNestedInput
  }

  export type SwapRequestUncheckedUpdateManyWithoutSenderInput = {
    receiver_id?: StringFieldUpdateOperationsInput | string
    offered_skill_id?: StringFieldUpdateOperationsInput | string
    requested_skill_id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwapRequestUpdateWithoutReceiverInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSent_swap_requestsNestedInput
    offered_skill?: SkillUpdateOneRequiredWithoutOffered_in_requestsNestedInput
    requested_skill?: SkillUpdateOneRequiredWithoutRequested_in_requestsNestedInput
    active_swap?: ActiveSwapUpdateOneWithoutSwap_requestNestedInput
  }

  export type SwapRequestUncheckedUpdateWithoutReceiverInput = {
    sender_id?: StringFieldUpdateOperationsInput | string
    offered_skill_id?: StringFieldUpdateOperationsInput | string
    requested_skill_id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active_swap?: ActiveSwapUncheckedUpdateOneWithoutSwap_requestNestedInput
  }

  export type SwapRequestUncheckedUpdateManyWithoutReceiverInput = {
    sender_id?: StringFieldUpdateOperationsInput | string
    offered_skill_id?: StringFieldUpdateOperationsInput | string
    requested_skill_id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveSwapUpdateWithoutUser1Input = {
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    swap_request?: SwapRequestUpdateOneRequiredWithoutActive_swapNestedInput
    user2?: UserUpdateOneRequiredWithoutActive_swaps_as_user2NestedInput
    skill1?: SkillUpdateOneRequiredWithoutActive_swaps_skill1NestedInput
    skill2?: SkillUpdateOneRequiredWithoutActive_swaps_skill2NestedInput
    completions?: SwapCompletionUpdateManyWithoutActive_swapNestedInput
  }

  export type ActiveSwapUncheckedUpdateWithoutUser1Input = {
    swap_request_id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    skill1_id?: StringFieldUpdateOperationsInput | string
    skill2_id?: StringFieldUpdateOperationsInput | string
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completions?: SwapCompletionUncheckedUpdateManyWithoutActive_swapNestedInput
  }

  export type ActiveSwapUncheckedUpdateManyWithoutUser1Input = {
    swap_request_id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    skill1_id?: StringFieldUpdateOperationsInput | string
    skill2_id?: StringFieldUpdateOperationsInput | string
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActiveSwapUpdateWithoutUser2Input = {
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    swap_request?: SwapRequestUpdateOneRequiredWithoutActive_swapNestedInput
    user1?: UserUpdateOneRequiredWithoutActive_swaps_as_user1NestedInput
    skill1?: SkillUpdateOneRequiredWithoutActive_swaps_skill1NestedInput
    skill2?: SkillUpdateOneRequiredWithoutActive_swaps_skill2NestedInput
    completions?: SwapCompletionUpdateManyWithoutActive_swapNestedInput
  }

  export type ActiveSwapUncheckedUpdateWithoutUser2Input = {
    swap_request_id?: StringFieldUpdateOperationsInput | string
    user1_id?: StringFieldUpdateOperationsInput | string
    skill1_id?: StringFieldUpdateOperationsInput | string
    skill2_id?: StringFieldUpdateOperationsInput | string
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completions?: SwapCompletionUncheckedUpdateManyWithoutActive_swapNestedInput
  }

  export type ActiveSwapUncheckedUpdateManyWithoutUser2Input = {
    swap_request_id?: StringFieldUpdateOperationsInput | string
    user1_id?: StringFieldUpdateOperationsInput | string
    skill1_id?: StringFieldUpdateOperationsInput | string
    skill2_id?: StringFieldUpdateOperationsInput | string
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SwapCompletionUpdateWithoutUserInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active_swap?: ActiveSwapUpdateOneRequiredWithoutCompletionsNestedInput
  }

  export type SwapCompletionUncheckedUpdateWithoutUserInput = {
    active_swap_id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwapCompletionUncheckedUpdateManyWithoutUserInput = {
    active_swap_id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwapRequestCreateManyOffered_skillInput = {
    id?: string
    sender_id: string
    receiver_id: string
    requested_skill_id: string
    message?: string | null
    status?: $Enums.SwapStatus
    rejection_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SwapRequestCreateManyRequested_skillInput = {
    id?: string
    sender_id: string
    receiver_id: string
    offered_skill_id: string
    message?: string | null
    status?: $Enums.SwapStatus
    rejection_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ActiveSwapCreateManySkill1Input = {
    id?: string
    swap_request_id: string
    user1_id: string
    user2_id: string
    skill2_id: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type ActiveSwapCreateManySkill2Input = {
    id?: string
    swap_request_id: string
    user1_id: string
    user2_id: string
    skill1_id: string
    status?: $Enums.ActiveSwapStatus
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type SwapRequestUpdateWithoutOffered_skillInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSent_swap_requestsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceived_swap_requestsNestedInput
    requested_skill?: SkillUpdateOneRequiredWithoutRequested_in_requestsNestedInput
    active_swap?: ActiveSwapUpdateOneWithoutSwap_requestNestedInput
  }

  export type SwapRequestUncheckedUpdateWithoutOffered_skillInput = {
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    requested_skill_id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active_swap?: ActiveSwapUncheckedUpdateOneWithoutSwap_requestNestedInput
  }

  export type SwapRequestUncheckedUpdateManyWithoutOffered_skillInput = {
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    requested_skill_id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwapRequestUpdateWithoutRequested_skillInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSent_swap_requestsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceived_swap_requestsNestedInput
    offered_skill?: SkillUpdateOneRequiredWithoutOffered_in_requestsNestedInput
    active_swap?: ActiveSwapUpdateOneWithoutSwap_requestNestedInput
  }

  export type SwapRequestUncheckedUpdateWithoutRequested_skillInput = {
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    offered_skill_id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active_swap?: ActiveSwapUncheckedUpdateOneWithoutSwap_requestNestedInput
  }

  export type SwapRequestUncheckedUpdateManyWithoutRequested_skillInput = {
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    offered_skill_id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActiveSwapUpdateWithoutSkill1Input = {
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    swap_request?: SwapRequestUpdateOneRequiredWithoutActive_swapNestedInput
    user1?: UserUpdateOneRequiredWithoutActive_swaps_as_user1NestedInput
    user2?: UserUpdateOneRequiredWithoutActive_swaps_as_user2NestedInput
    skill2?: SkillUpdateOneRequiredWithoutActive_swaps_skill2NestedInput
    completions?: SwapCompletionUpdateManyWithoutActive_swapNestedInput
  }

  export type ActiveSwapUncheckedUpdateWithoutSkill1Input = {
    swap_request_id?: StringFieldUpdateOperationsInput | string
    user1_id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    skill2_id?: StringFieldUpdateOperationsInput | string
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completions?: SwapCompletionUncheckedUpdateManyWithoutActive_swapNestedInput
  }

  export type ActiveSwapUncheckedUpdateManyWithoutSkill1Input = {
    swap_request_id?: StringFieldUpdateOperationsInput | string
    user1_id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    skill2_id?: StringFieldUpdateOperationsInput | string
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActiveSwapUpdateWithoutSkill2Input = {
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    swap_request?: SwapRequestUpdateOneRequiredWithoutActive_swapNestedInput
    user1?: UserUpdateOneRequiredWithoutActive_swaps_as_user1NestedInput
    user2?: UserUpdateOneRequiredWithoutActive_swaps_as_user2NestedInput
    skill1?: SkillUpdateOneRequiredWithoutActive_swaps_skill1NestedInput
    completions?: SwapCompletionUpdateManyWithoutActive_swapNestedInput
  }

  export type ActiveSwapUncheckedUpdateWithoutSkill2Input = {
    swap_request_id?: StringFieldUpdateOperationsInput | string
    user1_id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    skill1_id?: StringFieldUpdateOperationsInput | string
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completions?: SwapCompletionUncheckedUpdateManyWithoutActive_swapNestedInput
  }

  export type ActiveSwapUncheckedUpdateManyWithoutSkill2Input = {
    swap_request_id?: StringFieldUpdateOperationsInput | string
    user1_id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    skill1_id?: StringFieldUpdateOperationsInput | string
    status?: EnumActiveSwapStatusFieldUpdateOperationsInput | $Enums.ActiveSwapStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SkillCreateManyCategoryInput = {
    id?: string
    title: string
    description?: string | null
    level: $Enums.Level
    achievement?: string | null
    user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SkillUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSkillsNestedInput
    offered_in_requests?: SwapRequestUpdateManyWithoutOffered_skillNestedInput
    requested_in_requests?: SwapRequestUpdateManyWithoutRequested_skillNestedInput
    active_swaps_skill1?: ActiveSwapUpdateManyWithoutSkill1NestedInput
    active_swaps_skill2?: ActiveSwapUpdateManyWithoutSkill2NestedInput
  }

  export type SkillUncheckedUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    offered_in_requests?: SwapRequestUncheckedUpdateManyWithoutOffered_skillNestedInput
    requested_in_requests?: SwapRequestUncheckedUpdateManyWithoutRequested_skillNestedInput
    active_swaps_skill1?: ActiveSwapUncheckedUpdateManyWithoutSkill1NestedInput
    active_swaps_skill2?: ActiveSwapUncheckedUpdateManyWithoutSkill2NestedInput
  }

  export type SkillUncheckedUpdateManyWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    achievement?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwapCompletionCreateManyActive_swapInput = {
    id?: string
    completed_by: string
    rating?: number | null
    feedback?: string | null
    created_at?: Date | string
  }

  export type SwapCompletionUpdateWithoutActive_swapInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSwap_completionsNestedInput
  }

  export type SwapCompletionUncheckedUpdateWithoutActive_swapInput = {
    completed_by?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwapCompletionUncheckedUpdateManyWithoutActive_swapInput = {
    completed_by?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}