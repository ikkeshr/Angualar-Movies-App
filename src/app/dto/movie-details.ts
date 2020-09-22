export class MovieDetails {

    private _id: number;
    private _title: string;
    private _rating: number;
    private _genre: string[];
    private _posterUrl: string;
    private _homepage: string;
    private _overview: string;
    private _productionCompanies: string[];
    private _productionCountries: string[];
    private _releaseDate: string;
    private _originalTitle: string;
    private _voteCount: number;

    public get_id(): number {
        return this._id;
    }

    public set_id(_id: number): void {
        this._id = _id;
    }

    public get_title(): string {
        return this._title;
    }

    public set_title(_title: string): void {
        this._title = _title;
    }

    public get_rating(): number {
        return this._rating;
    }

    public set_rating(_rating: number): void {
        this._rating = _rating;
    }

    public get_genre(): string[] {
        return this._genre;
    }

    public get_genreStr(): string {
        return this._genre.join(", ");
    }

    public set_genre(_genre: string[]): void {
        this._genre = _genre;
    }

    public get_posterUrl(): string {
        return this._posterUrl;
    }

    public set_posterUrl(_posterUrl: string): void {
        this._posterUrl = _posterUrl;
    }

    public get_homepage(): string {
        return this._homepage;
    }

    public set_homepage(_homepage: string): void {
        this._homepage = _homepage;
    }

    public get_overview(): string {
        return this._overview;
    }

    public set_overview(_overview: string): void {
        this._overview = _overview;
    }

    public get_productionCompanies(): string[] {
        return this._productionCompanies;
    }

    public set_productionCompanies(_productionCompanies: string[]): void {
        this._productionCompanies = _productionCompanies;
    }

    public get_productionCompaniesStr(): string {
        return this._productionCompanies.join(", ");
    }

    public get_productionCountries(): string[] {
        return this._productionCountries;
    }

    public get_productionCountriesStr(): string {
        return this._productionCountries.join(", ");
    }

    public set_productionCountries(_productionCountries: string[]): void {
        this._productionCountries = _productionCountries;
    }

    public get_releaseDate(): string {
        return this._releaseDate;
    }

    public set_releaseDate(_releaseDate: string): void {
        this._releaseDate = _releaseDate;
    }

    public get_originalTitle(): string {
        return this._originalTitle;
    }

    public set_originalTitle(_originalTitle: string): void {
        this._originalTitle = _originalTitle;
    }

    public get_voteCount(): number {
        return this._voteCount;
    }

    public set_voteCount(_voteCount: number): void {
        this._voteCount = _voteCount;
    }


}
